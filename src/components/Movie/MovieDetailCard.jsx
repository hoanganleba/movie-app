import { useContext } from 'react'
import UserContext from '../../contexts/UserContext'
import useFetchProfileData from '../../hooks/useFetchProfileData'
import useHandleShowsFavorite from '../../hooks/useHandleShowFavorite'

const MovieDetailCard = (props) => {
  const { handleAddShowToFavorite } = useHandleShowsFavorite()
  const { userId } = useContext(UserContext)
  const { userFavoriteShowsId } = useFetchProfileData(userId)
  return (
    <div>
      <div className="grid lg:grid-cols-5 lg:gap-x-16">
        <img
          loading="lazy"
          width="600"
          height="800"
          className="rounded-lg shadow-lg shadow-gray-800/50"
          src={props.imgSrc}
          alt={props.name}
        />
        <div className="lg:col-span-4">
          <h1 className="mt-8 mb-4 text-3xl font-medium text-gray-900 lg:mt-0">
            {props.name}
          </h1>
          <p className="text-gray-900/80">
            {props.language ? 'Language: ' + props.language : ''}
          </p>
          <div className="flex mt-4 mb-8 gap-x-3">
            {props.genres?.map((item, index) => (
              <span
                className="px-6 py-2 text-xs text-red-600 bg-red-100 border border-red-600 rounded-full"
                key={index}
              >
                {item}
              </span>
            ))}
          </div>
          {userId ? (
            <button
              type="button"
              onClick={() => handleAddShowToFavorite(props.showId)}
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2"
            >
              {userFavoriteShowsId.some(item => item.includes(props.showId)) ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mr-2 -ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Added
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mr-2 -ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Add to favorite
                </>
              )}
            </button>
          ) : (
            ''
          )}
        </div>
      </div>
      <h3 className="mb-4 text-2xl font-medium mt-14">Summary</h3>
      <div
        className="leading-loose text-gray-900/80"
        dangerouslySetInnerHTML={{ __html: props.summary }}
      />
      <h3 className="mt-20 mb-6 text-2xl font-medium">Cast</h3>
      <div className="grid gap-10 lg:gap-20 lg:grid-cols-5">
        {props.casts?.map((item, index) => (
          <div key={index}>
            <img
              className="w-full rounded-lg shadow-lg shadow-gray-800/50"
              src={item.person.image?.medium}
              alt={item.person.name}
            />
            <p className="mt-5 text-lg font-medium text-gray-900">
              {item.person.name}
            </p>
            <p className="text-sm text-gray-900/80">{item.character.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieDetailCard
