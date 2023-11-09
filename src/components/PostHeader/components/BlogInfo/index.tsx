import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  BlogInfoAction,
  BlogInfoContainer,
  BlogInfoContent,
  BlogInfoDetails,
  BlogInfoLinks,
  BlogLink,
  BlogTitle,
} from './styles'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCalendar,
  faComment,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'

library.add(faCalendar, faComment, faChevronLeft)

export function BlogInfo() {
  return (
    <BlogInfoContainer>
      <BlogInfoContent>
        <BlogInfoAction>
          <BlogLink>
            <FontAwesomeIcon icon={['fas', 'chevron-left']} />
            Voltar
          </BlogLink>
          <BlogLink>
            Github
            <FontAwesomeIcon icon={['fas', 'arrow-up-right-from-square']} />
          </BlogLink>
        </BlogInfoAction>
        <BlogTitle>JavaScript data types and data structures</BlogTitle>
        <BlogInfoLinks>
          <BlogInfoDetails>
            <FontAwesomeIcon icon={['fab', 'github']} />
            Jairotsb
          </BlogInfoDetails>
          <BlogInfoDetails>
            <FontAwesomeIcon icon={['fas', 'calendar']} />
            Há 7 dias
          </BlogInfoDetails>
          <BlogInfoDetails>
            <FontAwesomeIcon icon={['fas', 'comment']} />5 comentários
          </BlogInfoDetails>
        </BlogInfoLinks>
      </BlogInfoContent>
    </BlogInfoContainer>
  )
}
