import axios from "axios"

export const getServerSideProps = async ({ params: { spotId } }) => {
  const { data: spot } = await axios(
    `http://localhost:3000/api/landspot/${spotId}`,
  )

  return {
    props: { spot },
  }
}
const SpotPage = ({ spot }) => (
  <>
    <h1 className="text-2xl font-semibold">Description: {spot.name}</h1>
    <p>Category: {spot.typelieu}</p>
  </>
)

export default SpotPage
