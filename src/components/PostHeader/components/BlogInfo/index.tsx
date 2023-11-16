import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BlogInfoAction,
  BlogInfoContainer,
  BlogInfoContent,
  BlogInfoDetails,
  BlogInfoLinks,
  BlogLink,
  BlogTitle,
} from "./styles";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCalendar,
  faComment,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

library.add(faCalendar, faComment, faChevronLeft);

interface BlogInfoProps {
  title: string;
  author: string;
  comments: number;
  created_at: string;
}

export function BlogInfo({
  title,
  author,
  comments,
  created_at,
}: BlogInfoProps) {
  console.log("created_at (typeof):", typeof created_at);

  return (
    <BlogInfoContainer>
      <BlogInfoContent>
        <BlogInfoAction>
          <BlogLink>
            <Link to="/">
              <FontAwesomeIcon icon={["fas", "chevron-left"]} />
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
              <FontAwesomeIcon icon={["fas", "arrow-up-right-from-square"]} />
            </a>
          </BlogLink>
        </BlogInfoAction>
        <BlogTitle>{title}</BlogTitle>
        <BlogInfoLinks>
          <BlogInfoDetails>
            <FontAwesomeIcon icon={["fab", "github"]} />
            {author}
          </BlogInfoDetails>
          <BlogInfoDetails>
            <FontAwesomeIcon icon={["fas", "calendar"]} />
            {typeof created_at === "string"
              ? formatDistanceToNow(new Date(created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })
              : "há muito tempo"}
          </BlogInfoDetails>
          <BlogInfoDetails>
            <FontAwesomeIcon icon={["fas", "comment"]} /> {comments}
          </BlogInfoDetails>
        </BlogInfoLinks>
      </BlogInfoContent>
    </BlogInfoContainer>
  );
}
