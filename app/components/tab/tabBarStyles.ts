import {StyleSheet} from 'react-native';

export const tabBarStyles = StyleSheet.create({
  labelFocused: {
    color: '#E6AD4C',
    fontSize: 9,
    fontWeight: '700',
    marginTop: 6,
    textAlign: 'center',
  },

  iconImageWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
  },
  bar: {
    elevation: 0,
    paddingTop: 10,
    justifyContent: 'center',
    position: 'absolute',
    paddingHorizontal: 10,
    borderColor: '#E6AD4C1F',
    borderTopWidth: 1,
    borderTopColor: '#E6AD4C1F',
    backgroundColor: 'transparent',
    height: 90,
    paddingBottom: 20,
    overflow: 'hidden',
  },

  buttonInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 54,
  },

  iconSel: {
    position: 'absolute',
    top: -6,
  },
  iconSelFocused: {
    zIndex: -1,
  },

  iconCircle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCircleFocused: {
    borderWidth: 1,
    borderColor: '#805CB4',
  },
  label: {
    fontSize: 9,
    fontWeight: '700',
    marginTop: 6,
    textAlign: 'center',
  },
  labelIdle: {
    color: '#FFFFFF59',
  },
});
