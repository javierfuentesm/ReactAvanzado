import { withPhotos } from '../hoc/withPhotos.jsx'
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards/index.jsx'

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)
