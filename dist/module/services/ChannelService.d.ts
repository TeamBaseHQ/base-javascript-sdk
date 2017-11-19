import Channel from '../models/Channel';
import Base from '../Base';
export default class ChannelService {
    base: Base;
    constructor(base: Base);
    static makeChannelFromResponse(response: any): Channel;
    static makeChannel(data: any): Channel;
    /**
     * Get Channel.
     *
     * @param {string} slug
     * @return {Channel}
     */
    getChannel(slug: string): Promise<Channel>;
    /**
     * Create Channel.
     *
     * @param {string} name
     * @param {string} description
     * @return {Channel}
     */
    createChannel(name: string, description?: string): Promise<Channel>;
    /**
     * Update Channel.
     *
     * @param {string} slug
     * @param {string} name
     * @param {string} description
     * @return {Channel}
     */
    updateChannel(slug: string, name?: string, description?: string): Promise<Channel>;
    /**
     * List of Channels. Paginated.
     *
     * @param {string} page
     * @param {string} limit
     * @return {Promise<Channel>}
     */
    getAllChannels(page?: string, limit?: string): Promise<Channel>;
    /**
     * Delete Channel.
     *
     * @param {string} slug
     * @return {Channel}
     */
    deleteChannel(slug: string): Promise<boolean>;
}
