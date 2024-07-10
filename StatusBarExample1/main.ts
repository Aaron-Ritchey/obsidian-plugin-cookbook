import { Plugin } from "obsidian";

export default class StatusBarExample1 extends Plugin {
  async onload() {

		// This adds a status bar item to the bottom of the app. Does not work on mobile apps.
		const statusBarItemEl: HTMLElement = this.addStatusBarItem();

    // With this handle, you can manipulate the element.
		statusBarItemEl.setText('Status Bar Text');

  }
}
