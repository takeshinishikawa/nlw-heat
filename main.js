/*You need to change takeshinishikawa for your username from each Social Media*/
const LinksSocialMedia = {
  github: 'takeshinishikawa',
  youtube: 'takeshinishikawa',
  facebook: 'takeshinishikawa',
  twittter: 'takeshinishikawa',
  instagram: 'takeshinishikawa'
}

/*declare fuctions with action+what*/
function changeSocialMediaLinks() {
  for (let li of SocialLinks.children) {
    //insert in "li" the child variables values of id SocialLinks which is the "ul"
    const social = li.getAttribute('class') //insert in the variable "social" the class value stored in "li"
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}` //substitutes the mask values for the LinksSocialMedia social variable
  }
}

changeSocialMediaLinks()

/*camelCase
      PascalCase
      snake_case*/

/*Simple var
      accept: true

      Structured data
      const user = {
        name: 'Robson',
        phone: 123456
      }*/

/*The funciton below fetches your github profile info and feeds your card with it */
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      UserName.textContent = data.name
      UserBio.textContent = data.bio
      UserLink.href = data.html_url
      UserImage.src = data.avatar_url
      UserLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
