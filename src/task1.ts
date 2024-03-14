
async function performRequest({
    // mime-type, i.e. 'image/png', 'video/mp4'
    mimeType,
    name,
    uri
}: {
    mimeType: string,
    name: string,
    uri: string
}) {
    console.log(`Performing request with: ${mimeType}, ${name}, ${uri}`)
}

// It's possible for the user to select multiple files, however we are only interested in the first one.
// Task given the 'item' object, call performRequest with the correct parameters,
// with the first 'item' asset as the argument.
// Give that this is a user-interaction, make sure to handle any potential issues.

// Assumptions:
// - type is either 'image' or 'video'

const item: {
    assets: {
        uri: string
        fileName: string
        type: 'image' | 'video'
    }[]
} = {
    assets: [
        {
            fileName: 'File 1',
            uri: 'https://example.com/file1.jpg',
            type: 'image'
        }
    ]
}



// Solution:
const firstAsset = item.assets[0]

if (firstAsset) {
    const extension = firstAsset.uri.split('.').pop()

    if (extension) {
        performRequest({
            mimeType: `${firstAsset.type}/${extension}`,
            name: firstAsset.fileName,
            uri: firstAsset.uri
        }).catch(error => {
            console.error('Error performing request', error)
        })
    }
}
