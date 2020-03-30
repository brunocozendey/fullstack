import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native';
import { Linking, Text, View, Image, TouchableOpacity } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import styles from './style';

import logoImg from '../../assets/logo.png';

export default function Detail(){
    const navigation = useNavigation();
    const message = 'Olá APAD, estou entrando em contato pois gostaria de ajudar no caso "cadelinha atropelada" com o valor de R$120,00';

    function navigateBack() {
        navigation.goBack()
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: 'Heori do caso: Cadelinha Atropelada',
            recipients: ['brunocozendey@gmail.com'],
            body: message,
        })

    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=5521999999999s&text=${message}`);

    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>

                <TouchableOpacity onPress={() => {}}>
                    <Feather name="arrow-left" size={28} color="#E82041"/>
                </TouchableOpacity>
            </View>

                <View style={styles.incident}>
                        <Text style={[styles.incidentProperty, {marginTop:0}]}>ONG: </Text>
                        <Text style={styles.incidentValue}>Apad</Text> 

                        <Text style={styles.incidentProperty}>CASO: </Text>
                        <Text style={styles.incidentValue}>Cadelinha Atrolpelada</Text> 


                        <Text style={styles.incidentProperty}>VALOR: </Text>
                        <Text style={styles.incidentValue}>R$120,00</Text> 
                </View>
                <View style={styles.contactBox}>
                    <Text style={styles.heroTitle}> Salve o dia! </Text>
                    <Text style={styles.heroTitle}>Seja o herói dessa caso!</Text>

                    <Text style={styles.heroDescription}>Entre em contato: </Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}> WhatsApp</Text> 
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}> E-mail</Text> 
                    </TouchableOpacity>
                </View>
                

            </View>
        </View>
    );
}