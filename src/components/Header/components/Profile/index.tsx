import { Avatar } from './components/Avatar'
import { library } from '@fortawesome/fontawesome-svg-core'

import { fab, faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faS,
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

import {
  GithubLink,
  ProfileBio,
  ProfileContainer,
  ProfileContent,
  ProfileHeader,
  ProfileInfo,
  ProfileInfoContent,
  ProfileName,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(
  faS,
  faBuilding,
  faUserGroup,
  fab,
  faGithub,
  faArrowUpRightFromSquare,
)

export function Profile() {
  return (
    <ProfileContainer>
      <Avatar />

      <ProfileContent>
        <ProfileHeader>
          <ProfileName>Jairo Tunisse</ProfileName>
          <GithubLink href="https://www.github.com/Jairotsb" target="_blank">
            GITHUB
            <FontAwesomeIcon icon={['fas', 'arrow-up-right-from-square']} />
          </GithubLink>
        </ProfileHeader>

        <ProfileBio>
          Full Stack Developer 💙 | Open source | TypeScript | ReactJs | NodeJs
          | React Native
        </ProfileBio>

        <ProfileInfo>
          <ProfileInfoContent>
            <FontAwesomeIcon icon={['fab', 'github']} />
            jairotsb
          </ProfileInfoContent>
          <ProfileInfoContent>
            <FontAwesomeIcon icon={['fas', 'building']} /> eteabs
          </ProfileInfoContent>
          <ProfileInfoContent>
            <FontAwesomeIcon icon={['fas', 'user-group']} />
            21
          </ProfileInfoContent>
        </ProfileInfo>
      </ProfileContent>
    </ProfileContainer>
  )
}
