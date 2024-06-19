function skillsMember()
{
    // Fetch all the members
    var members = document.querySelectorAll('.member');

    // Loop through each member
    for (var i = 0; i < members.length; i++)
    {
        // Fetch the member
        var member = members[i];

        // Fetch the skills
        var skills = member.querySelectorAll('.skill');

        // Loop through each skill
        for (var j = 0; j < skills.length; j++)
        {
            // Fetch the skill
            var skill = skills[j];

            // Fetch the value
            var value = skill.getAttribute('value');

            // Fetch the bar
            var bar = skill.querySelector('.bar');

            // Set the width
            bar.style.width = value + '%';
        }
    }
}


