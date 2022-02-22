import { useParams } from 'react-router-dom'
import MovieDetailCard from '../components/Movie/MovieDetailCard'
import useFetchCastsShowData from '../hooks/useFetchCastsShowData'
import useFetchShowData from '../hooks/useFetchShowData'

const Detail = () => {
  const { id } = useParams()
  const { showData } = useFetchShowData(id)
  const casts = useFetchCastsShowData(id)
  return (
    <>
      <MovieDetailCard
        showId={id}
        imgSrc={showData.image?.medium}
        name={showData.name}
        language={showData.language}
        summary={showData.summary}
        genres={showData.genres}
        casts={casts}
      />
    </>
  )
}

export default Detail
