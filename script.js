var skills = document.getElementsByClassName("my-skills")


function showSkills(button){
  var id = button.id;
  var skillId = id + "-skills";

  console.log(skillId);

  for(i = 0; i < skills.length; i++)
  {
    var currentSkill = skills[i];
    currentSkill.style.display = "none";

    if(currentSkill.classList.contains(skillId))
    {
      currentSkill.style.display = "flex";
    }
  }

}
