const aws = require('aws-sdk')
const crypto = require('crypto')

const region = "ap-south-1"
const bucketName = "cart-hunt-e-commerce"
const accessKeyId = process.env.AWS_ACCESS_KEY_ID
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY

const s3 = new aws.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: 'v4'
})


module.exports = {
    generateUploadURL: async () => {

        const rawBytes = await crypto.randomBytes(16)
        const imageName = rawBytes.toString('hex')

        const params = ({
            Bucket: bucketName,
            Key: imageName,
            Expires: 60
        })

        const uploadURL = await s3.getSignedUrlPromise('putObject', params)
        return uploadURL
    }
}

