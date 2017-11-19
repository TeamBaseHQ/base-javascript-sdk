import Thread from '../models/Thread';
import Base from '../Base';
export default class ThreadService {
    base: Base;
    constructor(base: Base);
    static makeThreadFromResponse(response: any): Thread;
    static makeThread(data: any): Thread;
    /**
     * Get Thread.
     *
     * @param {string} team
     * @param {string} slug
     * @return {Thread}
     */
    getThread(team: string, channel: string, slug: string): Promise<Thread>;
    /**
     * Create Thread.
     *
     * @param {string} team
     * @param channel
     * @param {string} subject
     * @param {string} description
     * @return {Thread}
     */
    createThread(team: string, channel: string, subject: string, description?: string): Promise<Thread>;
    /**
     * Update Thread.
     *
     * @param {string} team
     * @param channel
     * @param {string} slug
     * @param {string} subject
     * @param {string} description
     * @return {Thread}
     */
    updateThread(team: string, channel: string, slug: string, subject?: string, description?: string): Promise<Thread>;
    /**
     * List of Threads. Paginated.
     *
     * @param {string} team
     * @param channel
     * @param {string} page
     * @param {string} limit
     * @return {Promise<Thread>}
     */
    getAllThreads(team: string, channel: string, page?: string, limit?: string): Promise<Thread>;
    /**
     * Delete Thread.
     *
     * @param {string} team
     * @param channel
     * @param {string} slug
     * @return {Thread}
     */
    deleteThread(team: string, channel: string, slug: string): Promise<boolean>;
}
