import Card from './views';

const moduleConfig = {
  id: 'museums',
  title: 'Museums',
  icon: 'bank',
  stack: {
    initialRouteName: 'MuseumsOverview',
    routes: {
      Card,
    },
  },
};

export default moduleConfig;
