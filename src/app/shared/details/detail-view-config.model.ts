export interface DetailViewConfig {
  /**
   * This is the main header for the detail view
   */
  mainHeaderTitle: string;
  /**
   * The image is displayed at 375px X 500px
   */
  imageSrc: string;
  /**
   * Provide alt text for the image if the content of the image adds context to the view
   */
  imageAlt?: string;
  /**
   * This is header for the itemized details block of the detail view
   * If not provided, the default value is 'Details'
   */
  detailSubHeaderTitle?: string;
  /**
   * The key value pairs are displayed under the details subheader
   * The format is <p><strong>{{key}}:</strong> {{ value }}</p>
   */
  detailKeyValuePairs: { key: string; value: string }[];
 /**
   * This is the header for the detail list block of the detail view that appears below the details block
   * If no title is provided for the detail list block, the block will not be rendered
   */
  detailListHeaderTitle?: string;
  /**
   * The array of detail list items to be displayed in the detail list block of the detail view
   * This is displayed in a list format with each item on its own line
   * If no detail list items are provided, the detail list block will not be rendered even if a title is provided
   */
  detailListItems?: string[];
  /**
   * The route to navigate to when the button is clicked using routerLink
   * If no link is provided, the button will not be rendered
   */
  buttonRouterLink?: string | string[];
  /**
   * The label for the booking button. If not provided, the default value is 'Book Now'
   * If no buttonRouterLink is provided, this label will not be used and the button will not be rendered
   */
  buttonLabel?: string;
}
