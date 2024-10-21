import React from 'react';
import { FlexPlugin } from '@twilio/flex-plugin';

// import CustomTaskList from './components/CustomTaskList/CustomTaskList';
import MyCustomTaskInfoPanelItem from "./components/MyCustomTaskInfoPanelItem";
import SimpleButtonContainer from './components/SimpleButton/SimpleButton.Container';

const PLUGIN_NAME = 'WhatsappSenderPlugin';

export default class WhatsappSenderPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   */
  async init(flex, manager) {
    const options = { sortOrder: -1 };
    //flex.AgentDesktopView.Panel1.Content.add(<CustomTaskList key="WhatsappSenderPlugin-component" />, options);
    flex.TaskInfoPanel.Content.add(<MyCustomTaskInfoPanelItem key="to-do-list"/>);
    flex.AgentDesktopView.Panel1.Content.add(
      <SimpleButtonContainer key="SimpleButton" />,
      { sortOrder: -1 }
    );
  }
}
