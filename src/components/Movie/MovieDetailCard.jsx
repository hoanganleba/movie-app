const MovieDetailCard = (props) => {
  return (
    <div>
      <div className="grid grid-cols-5 gap-x-16">
        <img
          loading="lazy"
          width="600"
          height="800"
          className="rounded-lg shadow-lg shadow-gray-800/50"
          src={props.imgSrc}
          alt={props.name}
        />
        <div className="col-span-4">
          <h1 className="mb-4 text-3xl font-medium text-gray-900">
            {props.name}
          </h1>
          <p className="text-gray-900/80">Language: {props.language}</p>
          <div className="flex mt-4 gap-x-3">
            {props.genres?.map((item, index) => (
              <span
                className="px-6 py-2 text-xs text-red-600 bg-red-100 border border-red-600 rounded-full"
                key={index}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      <h3 className="mb-4 text-2xl font-medium mt-14">Summary</h3>
      <div
        className="leading-loose text-gray-900/80"
        dangerouslySetInnerHTML={{ __html: props.summary }}
      />
      <h3 className="mt-20 mb-6 text-2xl font-medium">Cast</h3>
      <div className="grid grid-cols-5 gap-20">
        {props.casts?.map((item, index) => (
          <div key={index}>
            <img className="w-full rounded-lg shadow-lg shadow-gray-800/50" src={item.person.image?.medium} alt={item.person.name} />
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
