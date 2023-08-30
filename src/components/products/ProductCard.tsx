import { TouchableOpacity, Text, Image } from 'react-native';

import { GLOBAL } from '../../styles/global';
import { IProduct } from '../../interfaces/products/product';

interface Props {
    product: IProduct;
}


export const ProductCard = ({ product }: Props) => {
    return (
        <TouchableOpacity style={ GLOBAL.cardContainer }>
            <Image
                style={ GLOBAL.productCardImage }
                source={{ uri: 'http://192.168.1.66:4000/' + product.images[0] }}
            />
            <Text numberOfLines={1} style={[ GLOBAL.subTitle ]}>{ product.name }</Text>
        </TouchableOpacity>
    )
}
