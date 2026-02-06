import decodeList from "./decodeList";
function ListingsViewer() {
    return (
        <div>
            <ul>
                { decodeList().map(listing =>
                    <li key={listing.listingID}>{listing.listingID}</li>
                )}
            </ul>
        </div>
    )
}
export default ListingsViewer;