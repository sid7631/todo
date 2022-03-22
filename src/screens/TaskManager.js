import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Avatar } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskListToday from './components/TaskListToday';
import TaskListUpcoming from './components/TaskListUpcoming';
import { Chip } from 'react-native-paper';
import TaskDone from './components/TaskDone';


const Tab = createNativeStackNavigator();

const notificationIcon = <Icon name='notifications' size={24} />

const natigationRender = (param) => {
    switch (param) {
        case 0:
            return <TaskListToday />
        case 1:
            return <TaskListUpcoming />
        case 2:
            return <TaskDone />

        default:
            break;
    }
}

const TaskManager = ({ navigation }) => {

    const [active, setactive] = useState(0)

    const chipClick = (param) => {
        setactive(param)
        navigation.navigate('TaskManager', { screen: 'TaskListToday' });
    }

    return (
        <View>
            <View style={styles.topContainer}>
                <Text style={styles.title}>Task Manager</Text>
                {notificationIcon}
            </View>
            <View style={styles.content}>

                <View style={styles.userContainer}>
                    <Avatar.Image size={48} source={require('../assets/avatar.png')} />
                    <View style={styles.userWelcomeContainer}>
                        <Text style={styles.userWelcome}>
                            Welcome Kareena!
                        </Text>
                        <Text style={styles.userWelcomeSub}>
                            Here's Update Today
                        </Text>
                    </View>
                </View>
                <View style={styles.chipNavigation}>
                    <Text onPress={() => chipClick(0)} style={[styles.chip, active === 0 ? styles.activeChip : styles.inactiveChip]}>Today</Text>
                    <Text onPress={() => chipClick(1)} style={[styles.chip, active === 1 ? styles.activeChip : styles.inactiveChip]}>Upcoming</Text>
                    <Text onPress={() => chipClick(2)} style={[styles.chip, active === 2 ? styles.activeChip : styles.inactiveChip]}>Task Done</Text>
                </View>
                <ScrollView>
                    {natigationRender(active)}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    topContainer: {
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    chip: {
        width: 80,
        textAlign: 'center',
        borderRadius: 20,
        paddingVertical: 2,
        fontSize: 12,
        fontFamily: 'Poppins'
    },
    activeChip: {
        backgroundColor: '#333',
        color: '#fff',
    },
    inactiveChip: {
        fontWeight: '600'
    },
    content: {
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        height: '100%'
    },
    userContainer: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 10,
    },
    title: {
        fontSize: 18,
        fontFamily: 'Poppins',
    },
    userWelcomeContainer: {
        marginLeft: 20
    },
    userWelcome: {
        fontSize: 12,
        fontFamily: 'Poppins'
    },
    userWelcomeSub: {
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '700',
    },
    chipNavigation: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around'
    },
    buttonStyle: {
        height: 54,
        width: '80%',
        marginTop: 32,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2EE59D',
        shadowRadius: 5,
        shadowOpacity: 0.7,
        shadowColor: 'rgba(46, 229, 157, 0.5)',
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },
    buttonTextStyle: {
        color: '#fdfdfd',
        fontWeight: '700',
    },
});

export default TaskManager;