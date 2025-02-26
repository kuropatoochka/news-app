import {useNavigate} from "react-router-dom"

export const useNavigation = () => {
  const navigate = useNavigate()

  const handleToNews = (item) => {
    navigate(`/news/${item?.id}`, {state: {newsItem: item}, replace: true})
  }

  const goBack = () => {
    navigate(-1)
  }

  return {handleToNews, goBack}
}
