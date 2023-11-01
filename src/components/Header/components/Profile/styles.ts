import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 54rem;
  height: 13.2rem;
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme['base-profile']};

  margin-top: calc(0px - 5.5rem - 6px);
`

export const ProfileContent = styled.div`
  padding: 0.5rem 2rem;
`

export const ProfileName = styled.h3`
  font-size: ${(props) => props.theme.fontSize.xxlarge};
  line-height: 130%;
  color: ${(props) => props.theme['base-title']};
`

export const ProfileBio = styled.p`
  font-size: ${(props) => props.theme.fontSize.medium};
  line-height: 160%;
  color: ${(props) => props.theme['base-text']};
  margin-top: 0.5rem;
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.7rem;
`

export const ProfileInfoContent = styled.p`
  font-size: ${(props) => props.theme.fontSize.medium};
  line-height: 160%;
  color: ${(props) => props.theme['base-subtitle']};
  margin-right: 1.5rem;

  svg {
    margin-right: 0.5rem;
  }
`
export const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

export const GithubLink = styled.a`
  color: ${(props) => props.theme.blue};
  font-size: ${(props) => props.theme.fontSize.small};
  text-decoration: none;
  cursor: pointer;
`
