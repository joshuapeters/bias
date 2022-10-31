import Image from "next/image"

type PhotocardProps = {
  name: string,
  artist: string,
  album: string,
  pcImageUrl: string,
  id: string
}

export const CompactPhotocard = ({ name, artist, album, pcImageUrl, id }: PhotocardProps) => {

  return (
    <div className="card bg-base-100 shadow-xl group relative w-36 md:w-48 xl:w-64">
      <figure className="group-hover:brightness-50">
        <img src={pcImageUrl} alt="photocard" />
      </figure>
      <div className="card-body invisible w-4/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:visible">
        <h2 className="text-center"><b>{name}</b></h2>
        <p>{artist}</p>
        <p>{album}</p>
      </div>
    </div >
  )
}

export const ExpandedPhotocard = ({ name, artist, album, pcImageUrl, id }: PhotocardProps) => {

  return (
    <div>
      <Image src={pcImageUrl} alt={`${name} - ${artist} - ${album} - ${id}`} width={100} height={600} unoptimized={true} />
      <p>{name}</p>
      <p>{artist}</p>
      <p>{album}</p>
      <p>{id}</p>
    </div>
  )
}

