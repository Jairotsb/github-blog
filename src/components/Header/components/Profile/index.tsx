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
import { useEffect, useState } from 'react'
import { api } from '../../../../api'

library.add(
  faS,
  faBuilding,
  faUserGroup,
  fab,
  faGithub,
  faArrowUpRightFromSquare,
)

interface UserProps {
  name: string
  login: string
  company: string
  followers: number
  following: number
  bio: string
  html_url: string
}

export function Profile() {
  const [user, setUser] = useState<UserProps>(Object)

  async function fetchUser() {
    const response = await api.get('')
    console.log(response.data)
    setUser(response.data)
  }
  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <ProfileContainer>
      <Avatar />

      <ProfileContent>
        <ProfileHeader>
          <ProfileName>{user.name}</ProfileName>
          <GithubLink href={user.html_url} target="_blank">
            GITHUB
            <FontAwesomeIcon icon={['fas', 'arrow-up-right-from-square']} />
          </GithubLink>
        </ProfileHeader>

        <ProfileBio>{user.bio}</ProfileBio>

        <ProfileInfo>
          <ProfileInfoContent>
            <FontAwesomeIcon icon={['fab', 'github']} />
            {user.login}
          </ProfileInfoContent>
          <ProfileInfoContent>
            <FontAwesomeIcon icon={['fas', 'building']} /> {user.company}
          </ProfileInfoContent>
          <ProfileInfoContent>
            <FontAwesomeIcon icon={['fas', 'user-group']} />
            {user.followers}
          </ProfileInfoContent>
        </ProfileInfo>
      </ProfileContent>
    </ProfileContainer>
  )
}
