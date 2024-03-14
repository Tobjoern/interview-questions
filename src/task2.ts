
const openLibrary = async () => {
    return {
        type: 'library',
        url: 'https://example.com/file1.jpg',
        success: true
    }
}

const openCamera = async () => {
    return {
        type: 'camera',
        url: 'https://example.com/file1.jpg',
        success: true
    }
}

const uploadPicture = async (type: string | 'library' | 'camera') => {
    try {

        let res;

        if (type === 'library') {
            res = await openLibrary()
        } else if (type === 'camera') {
            res = await openCamera()
        }

        if (res?.success) {
            console.log(`Performing request with: ${res.type}, ${res.url}`)
        }

    } catch (e) {
        console.error('Error uploading picture', e)

        throw e
    }
}
