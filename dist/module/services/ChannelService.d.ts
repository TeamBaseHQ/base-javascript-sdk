import Channel from '../models/Channel';
import Base from '../Base';
import BaseCollection from '../models/BaseCollection';
import Media from '../models/Media';
export default class ChannelService {
    base: Base;
    constructor(base: Base);
    static makeChannelFromResponse(response: any): Channel;
    static makeChannel(data: any): Channel;
    static makeCollectionFromResponse(response: any): BaseCollection<Channel>;
    /**
     * Get Channel.
     *
     * @param {string} team
     * @param {string} slug
     * @return {Channel}
     */
    getChannel(team: string, slug: string): Promise<Channel>;
    /**
     * Create Channel.
     *
     * @param {string} team
     * @param {string} name
     * @param {string} description
     * @param color
     * @param is_private
     * @return {Channel}
     */
    createChannel(team: string, name: string, description?: string, color?: string, is_private?: boolean): Promise<Channel>;
    /**
     * Update Channel.
     *
     * @param {string} team
     * @param {string} slug
     * @param {string} name
     * @param {string} description
     * @param color
     * @param is_private
     * @return {Channel}
     */
    updateChannel(team: string, slug: string, name?: string, description?: string, color?: string, is_private?: boolean): Promise<Channel>;
    /**
     * List of Channels. Paginated.
     *
     * @param {string} team
     * @param {string} page
     * @param {string} limit
     * @return {Promise<BaseCollection<Channel>>}
     */
    getAllChannels(team: string, page?: string, limit?: string): Promise<BaseCollection<Channel>>;
    /**
     * Delete Channel.
     *
     * @param {string} team
     * @param {string} slug
     * @return {Channel}
     */
    deleteChannel(team: string, slug: string): Promise<boolean>;
    uploadMedia(team: string, slug: string, files: File[]): Promise<Media[]>;
}
