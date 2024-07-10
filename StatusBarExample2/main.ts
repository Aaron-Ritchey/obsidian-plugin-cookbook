import { Plugin } from "obsidian";

export default class StatusBarExample2 extends Plugin {
  async onload() {

		const statusBarItemEl: HTMLElement = this.addStatusBarItem();

    // We can use `statusBarItemEl` inside of callbacks.
		statusBarItemEl.setText('Fish Default');

		this.addRibbonIcon('fish', "Enable Fish in Status Bar", (evt: MouseEvent) => {
      statusBarItemEl.setText('Fish Enabled');
		});

		this.addRibbonIcon('fish-off', "Disable Fish in Status Bar", (evt: MouseEvent) => {
      statusBarItemEl.setText('Fish Disabled');
		});
    
  }
}
