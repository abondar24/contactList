import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native';
import Icon from '../../components/common/Icon'
import ContactsComponent from '../../components/Contacts';
import getContacts from '../../context/actions/contacts/getContacts';
import { GlobalContext } from '../../context/Provider'

const Contacts = () => {

    const { setOptions, toggleDrawer } = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const { contactsDispatch,
        contactsState: {
            getContacts: { data, loading },
        } } = useContext(GlobalContext);


    useEffect(() => {
        getContacts()(contactsDispatch);
    }, []);


    useEffect(() => {
        setOptions({
            headerLeft: () =>
                <TouchableOpacity
                    onPress={() => {
                        toggleDrawer();
                    }}>
                    <Icon type='material' name='menu' size={25} style={{ padding: 10 }} />
                </TouchableOpacity>
        })
    }, []);

    return (
        <ContactsComponent modalVisible={modalVisible} setModalVisible={setModalVisible} data={data} loading={loading}></ContactsComponent>
    );
};


export default Contacts;