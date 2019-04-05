using AutoMapper;
using NotesProject.Entities;
using NotesProject.Models;

public class UserProfile : Profile
{
    public UserProfile()
    {
        CreateMap<RegistrationViewModel, AppUser>();
    }
}