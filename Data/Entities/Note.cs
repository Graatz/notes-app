using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NotesProject.Entities
{
    public class Note
    {
        public int Id { get; set; }
        [MaxLength(255)]
        public string Name { get; set; }
        public string Content { get; set; }
        public ICollection<Tag> Tags { get; set; }
    }
}
