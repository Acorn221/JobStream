import hash from 'hash-it';

export enum EventTargetEventType {
  PickerStarted = 'pickerStarted',
  PickerSubmit = 'pickerSubmit',
  PickerClosed = 'pickerClosed',
  SelectedElementsUpdate = 'selectedElementsUpdate',
  ElementPickerHoverIn = 'elementPickerHoverIn',
  ElementPickerHoverOut = 'elementPickerHoverOut',
}

export type PickerEventType = {
  detail: Element;
};

export type selectedElement = {
  element: HTMLDivElement;
  hashed: number;
};

/**
 * This class is responsible for handling the element picker functionality.
 * It is responsible for adding and removing event handlers for element selection and hover.
 *
 * The event listeners must be initialised with the react useCallback hook, otherwise they will be
 * reinitialised on every render and the event listeners will be duplicated.
 */
class ElementPicker extends EventTarget {
  // Set to store selected elements
  selectedElements: selectedElement[] = [];

  picking: boolean = false;

  toggleSelectedElement(element: HTMLDivElement): void {
    const hashed = hash(element.innerText.trim());

    if (this.selectedElements.find((el) => el.hashed === hashed)) {
      element.classList.remove('element-picker-selected');
      this.selectedElements = this.selectedElements.filter((el) => el.hashed !== hashed);
      this.dispatchEvent(
        new CustomEvent<selectedElement[]>(
          EventTargetEventType.SelectedElementsUpdate,
          { detail: [...this.selectedElements] },
        ),
      );
    } else {
      // If the element is empty, don't add it to the array
      if (element?.innerText?.trim() === '') return;

      // Before adding the parent element, remove any of it's children if present in the array
      element.querySelectorAll('*').forEach((child) => {
        // @ts-ignore inner text might be null
        const childHash = hash(child?.innerText);

        if (this.selectedElements.find((el) => el.hashed === childHash)) {
          child.classList.remove('element-picker-selected');
          this.selectedElements = this.selectedElements.filter((el) => el.hashed !== childHash);
        }
      });

      element.classList.add('element-picker-selected');
      this.selectedElements.push({ element, hashed });
      this.dispatchEvent(
        new CustomEvent<selectedElement[]>(
          EventTargetEventType.SelectedElementsUpdate,
          { detail: [...this.selectedElements] },
        ),
      );
    }
  }

  /**
   * @param toRemove a list of hashes of elements to remove
   */
  removeElements(toRemove: number[]): void {
    const newSelectedElements = this.selectedElements.filter((el) => {
      const found = toRemove.find((x) => x === el.hashed);
      if (found) {
        el.element.classList.remove('element-picker-selected');
        return false;
      }
      return true;
    });
    this.selectedElements = newSelectedElements;
    this.dispatchEvent(
      new CustomEvent<selectedElement[]>(
        EventTargetEventType.SelectedElementsUpdate,
        { detail: [...this.selectedElements] },
      ),
    );
  }

  handleElementSelection(event: MouseEvent): void {
    if (!this.picking) return;
    const element = event.target as HTMLDivElement;

    // check if any parent has the id 'plasmo-shadow-container'
    const recursiveCheck = (el: Element): boolean => {
      if (el.tagName.toLowerCase() === 'plasmo-csui') return true;
      if (el.parentElement) return recursiveCheck(el.parentElement);
      return false;
    };

    if (recursiveCheck(element)) return;
    event.preventDefault();
    event.stopPropagation();
    this.toggleSelectedElement(element);
  }

  handleElementHoverIn(event: MouseEvent): void {
    if (!this.picking) return;
    const element = event.target as Element;

    element.classList.add('element-picker-hovered');
    event.stopPropagation();
  }

  handleElementHoverOut(event: MouseEvent): void {
    if (!this.picking) return;
    const element = event.target as Element;
    element.classList.remove('element-picker-hovered');
    event.stopPropagation();
  }

  // Function to begin picker functionality
  startPicker(): void {
    this.selectedElements = [];
    this.picking = true;
    // Disable link behavior for all link elements on the page
    const allLinks = document.querySelectorAll('a');
    allLinks.forEach((link) => {
      link.setAttribute('aria-label', link.getAttribute('href') || '');
      // eslint-disable-next-line no-script-url
      link.setAttribute('href', 'javascript:;');
    });

    this.dispatchEvent(new CustomEvent(EventTargetEventType.PickerStarted));
  }

  // Function to end picker functionality
  stopPicker(): void {
    // If the picker was not active, do nothing
    if (this.picking === false) return;

    this.picking = false;
    // Reset styling on all selected elements and clear the set
    this.selectedElements.forEach((entry) => {
      entry.element.classList.remove('element-picker-selected');
    });

    [...document.querySelectorAll('.element-picker-hovered')].forEach((element) => {
      element.classList.remove('element-picker-hovered');
    });

    // Re-enable link behavior for all link elements on the page
    const allLinks = document.querySelectorAll('a');
    allLinks.forEach((link) => {
      link.setAttribute('href', link.getAttribute('aria-label') || '');
    });
  }

  closePicker(): void {
    this.stopPicker();
    this.dispatchEvent(new CustomEvent(EventTargetEventType.PickerClosed));
    this.selectedElements = [];
  }

  submitPicker(): void {
    this.stopPicker();
    this.dispatchEvent(new CustomEvent(EventTargetEventType.PickerSubmit));
  }

  resetSelectedElements(): void {
    this.selectedElements = [];
  }
}

export { ElementPicker };
