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
import { Link } from 'react-router-dom'

library.add(faCalendar, faComment, faChevronLeft)

export function BlogInfo() {
  return (
    <BlogInfoContainer>
      <BlogInfoContent>
        <BlogInfoAction>
          <BlogLink>
            <Link to="/">
              <FontAwesomeIcon icon={['fas', 'chevron-left']} />
              Voltar
            </Link>
          </BlogLink>
          <BlogLink>
            <a
              href="https://github.com/Jairotsb"
              target="_blank"
              rel="noreferrer"
            >
              Github
              <FontAwesomeIcon icon={['fas', 'arrow-up-right-from-square']} />
            </a>
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
