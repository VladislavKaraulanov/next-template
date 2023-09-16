import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { AppDispatch, RootState } from '@/shared/store'
import { useGenerateMetadataType } from '@/shared/lib/helpers/hook/type'
export const customMetadata = ({
	title,
	description,
	canonical,
	images
}: useGenerateMetadataType) => {
	return {
		title: title,
		description: description,
		openGraph: {
			title: title,
			description: description,
			images: `https://domen.ua/${images ? images : 'baseImages.jpg'}`,
			siteName: 'SiteName',
			type: 'website',
			locale: 'ua',
			url: 'domen.ua'
		},
		alternates: {
			canonical: canonical
		}
	}
}

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
