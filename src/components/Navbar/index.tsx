import React, { useEffect, useRef } from 'react';
import { BackHandler, NativeEventSubscription, TouchableHighlight, View } from 'react-native';
import { FocusedTabButton, NavbarContainer, TabLabel, TabsContainer } from './styles';
import { SubTitle } from '../../screens/Home/styles';

// Define the tabs with their labels and corresponding screens
const tabs: { label: string; screen: string }[] = [
  { label: 'Home', screen: 'Home' },
  { label: 'Categories', screen: 'Categories' },
  { label: 'Movies', screen: 'Movies' },
  { label: 'Shows', screen: 'Shows' },
  { label: 'Favorites', screen: 'Favorites' },
];

const Navbar = () => {
  // State to keep track of the currently focused tab
  const [focusedTab, setFocusedTab] = React.useState('Home');

  // Function to navigate to a specific tab/screen
  const navigateToTab = (screenName: string) => {
    setFocusedTab(screenName);
    // Add the actual navigation logic to the desired screen here.
  };

  // Function to navigate to the next tab
  const navigateToNextTab = () => {
    const currentIndex = tabs.findIndex((tab) => tab.screen === focusedTab);
    const nextIndex = (currentIndex + 1) % tabs.length;
    const nextTab = tabs[nextIndex];
    navigateToTab(nextTab.screen);
  };

  // Function to navigate to the previous tab
  const navigateToPreviousTab = () => {
    const currentIndex = tabs.findIndex((tab) => tab.screen === focusedTab);
    const previousIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    const previousTab = tabs[previousIndex];
    navigateToTab(previousTab.screen);
  };

  // Ref for the BackHandler subscription
  const backHandler = useRef<NativeEventSubscription | null>(null);

  useEffect(() => {
    // Subscribe to the hardware back press event
    backHandler.current = BackHandler.addEventListener('hardwareBackPress', () => {
      // Handle the "Back" button on the remote control if necessary.
      return true; // Prevent the default "Back" button behavior.
    });

    // Cleanup the subscription when the component unmounts
    return () => {
      if (backHandler.current) {
        backHandler.current.remove();
      }
    };
  }, []);

  return (
    <NavbarContainer>
      <TabsContainer>
        {/* Map over the tabs and render buttons for each */}
        {tabs.map((tab, index) => (
          <TouchableHighlight
            key={index}
            onFocus={() => navigateToTab(tab.screen)}
            onBlur={() => navigateToTab(focusedTab)} // Treat blur as returning to the previous focus
            onPress={() => navigateToTab(tab.screen)}
          >
            <FocusedTabButton
              key={index}
              accessible={true}
              accessibilityRole="button"
            >
              {/* Display the tab label */}
              <TabLabel><SubTitle>{tab.label}</SubTitle></TabLabel>
            </FocusedTabButton>
          </TouchableHighlight>
        ))}
      </TabsContainer>
    </NavbarContainer>
  );
};

export default Navbar;
