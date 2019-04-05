using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NotesProject.Data;
using NotesProject.Models;
using NotesProject.Entities;
using AutoMapper;
using Microsoft.AspNetCore.Identity;

namespace NotesProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class AccountsController : Controller
    {
        private readonly NotesDbContext context;
        private readonly IMapper mapper;
        private readonly UserManager<AppUser> userManager;

        public AccountsController(NotesDbContext context, IMapper mapper, UserManager<AppUser> userManager)
        {
            this.context = context;
            this.mapper = mapper;
            this.userManager = userManager;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]RegistrationViewModel model) 
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            var userIdentity = mapper.Map<AppUser>(model);
            var result = await userManager.CreateAsync(userIdentity, model.Password);

            if (!result.Succeeded)
                return BadRequest(result.Errors);

            return Ok(model);
        }
    }
}