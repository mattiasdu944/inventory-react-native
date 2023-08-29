import { TouchableOpacity, Text, Image } from 'react-native';

import { Product } from "../../interfaces/products/product"
import { GLOBAL } from '../../styles/global';

interface Props {
    product: Product;
}


export const ProductCard = ({ product }: Props) => {
    return (
        <TouchableOpacity style={ GLOBAL.cardContainer }>
            <Image
                style={ GLOBAL.productCardImage }
                source={{ uri: 'https://store.innovacode.online' + product.images[0].url }}
            />
            <Text numberOfLines={1} style={[ GLOBAL.subTitle ]}>{ product.name }</Text>
        </TouchableOpacity>
    )
}
