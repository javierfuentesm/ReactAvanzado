import { withPhotos } from '../components/hoc/withPhotos.jsx'
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards/index.jsx'

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)
