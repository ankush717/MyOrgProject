import { LightningElement, api, track } from 'lwc';
import getAccounts from '@salesforce/apex/SearchLink.getAccounts';

export default class SearchCompo extends LightningElement {
    @track searchText = '';
    @track selectedAssetId = '';
    @track searchQue='';
    @track closeTab = true;
    @api assets;
    @track error;

    handleSearchChange(event) {
        this.searchText = event.target.value;
        this.searchAccounts(); // Initiates the search when text changes
    }

    handleClick() {
        this.closeTab = false;
    }

    handleLinkClick(event) {
        const assetId = event.target.dataset.assetid;
        if (assetId) {
            window.open(assetId, '_blank'); // Opens the URL in a new tab/window
        }
    }

    handleAssetSelect(event) {
        this.selectedAssetId = event.target.value;
        console.log('Selected Asset Id:', this.selectedAssetId);
    }
    @track showModal = false;
    modalText = "You can add your custom text here.";

    get modalClass() {
        return this.showModal ? 'modal display-block' : 'modal display-none';
    }

    openModal() {
        this.showModal = true;
    }

    closeModal() {
        this.showModal = false;
    }
   

    searchAccounts() {
        if (this.searchText) {
            getAccounts({ searchText: this.searchText })
                .then(result => {
                    this.assets = result;
                    this.error = undefined; // Clear previous error, if any
                })
                .catch(error => {
                    this.error = error.message || 'Unknown error'; // Set the error message
                    this.assets = undefined; // Clear assets on error
                });
        } else {
            this.assets = undefined; // Clear assets if search text is empty
        }
    }

    connectedCallback() {
        this.searchAccounts(); // Initiates the search on component load
    }
    
}