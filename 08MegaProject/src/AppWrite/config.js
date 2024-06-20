import conf from "../conf/conf";
import { Client,ID,Databases,Query,Storage } from "appwrite";

export class Service{
    client = new Client();
    databases;
    storage;
    constructor(){
        this.client 
            .setEndpoint(conf.appwriteurl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.storage = new Storage(this.client)
    }

    async createPost({title,slug, content, featuredImage,status,userId})
    {
        // title,slug content etc is all defind in database
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("AppWrite service :: createPost :: error",error)
            
        }
    }

    async updatePost(slug,{title, content, featuredImage,status}){
        try {
            return  await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,

                }
            )
        } catch (error) {
            console.log("AppWrite service :: updatePost :: error",error)
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true
        } catch (error) {
            console.log("AppWrite service :: deletePost :: error",error)
            return false;
        }
    }
    
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                   conf.appwriteDatabaseId,
                   conf.appwriteCollectionId,
                   slug,
                )
        } catch (error) {
            console.log("AppWrite service :: createPost :: error",error)
            return false
            
        }
    }

    async getPosts(queries = [Query.equal("status","active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                100,

            )
        } catch (error) {
            
        }
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log("AppWrite service :: uploadFile :: error",error)
            return false
        }
    }


    async daleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId,
            )
            return true;
        } catch (error) {
            console.log("AppWrite service :: deleteFile :: error",error)
            return false;
        }
    }

    async getFilePreview(fileId){
        return this.getFilePreview(
            conf.appwriteBucketId,
            fileId,
        )
    }
} 

const service = new Service();
export default service;
