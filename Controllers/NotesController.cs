using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NotesProject.Data;
using NotesProject.Entities;

namespace NotesProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class NotesController : Controller
    {
        private readonly NotesDbContext context;

        public NotesController(NotesDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var notes = context.Notes.Include(n => n.Tags).ToList();

                return Ok(notes);
            }
            catch (Exception ex)
            {
                return BadRequest("Failed to get notes " + ex.ToString());
            }
        }

        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            try
            {
                var note = context.Notes.Include(n => n.Tags).Single(n => n.Id == id);

                return Ok(note);
            }
            catch (Exception ex)
            {
                return BadRequest("Failed to get notes " + ex.ToString());
            }
        }

        [HttpGet("{tag}")]
        public IActionResult Get(string tag)
        {
            try
            {
                var notes = context.Notes.Include(n => n.Tags).Where(n => n.Tags.SingleOrDefault(t => t.Name == tag) != null).ToList();

                return Ok(notes);
            }
            catch (Exception ex)
            {
                return BadRequest("Failed to get notes " + ex.ToString());
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]Note model)
        {
            try
            {
                context.Add(model);
                context.SaveChanges();

                return Created($"/api/notes/{model.Id}", model);
            }
            catch (Exception ex) {
                return BadRequest("Failed to post a note");
            }
        }
    }
}