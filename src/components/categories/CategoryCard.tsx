
import { View, Text, Image } from 'react-native';
import { ICategory } from '../../interfaces/category/category';
import { GLOBAL } from '../../styles/global';

interface Props {
    category: ICategory
}

export const CategoryCard = ({ category }: Props) => {
    return (
        <View style={ GLOBAL.categoryCard }>
            <Image
                style={ GLOBAL.categoryCardImage }
                source={{ uri: 'http://192.168.1.9:4000/' + category.image }}
            />
            <View>
                <View style={{ marginBottom: 10 }}>
                    <Text style={ GLOBAL.subTitle }>Nombre:</Text>
                    <Text style={ GLOBAL.text }>{ category.name }</Text>
                </View>

                <View style={{ marginBottom: 10 }}>
                    <Text style={ GLOBAL.subTitle }>Descripcion:</Text>
                    <Text style={{...GLOBAL.text, maxWidth:250 }}  numberOfLines={2}>{ category.description }</Text>
                </View>

                <View style={{ marginBottom: 10 }}>
                    <Text style={ GLOBAL.subTitle }>Fecha de creacion:</Text>
                    <Text style={ GLOBAL.text }>{ category.createdAt }</Text>
                </View>
            </View>
        </View>
    )
}
