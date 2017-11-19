export default class Team {
    /**
     * Team name.
     */
    name: string;
    /**
     * Team description.
     */
    description: string;
    /**
     * Team invitation_code.
     */
    invitation_code: string;
    /**
     * Team user_id.
     */
    user_id: string;
    /**
     * Team slug.
     */
    slug: string;
    /**
     * Return User Name
     *
     * @return {string} Name
     */
    getName(): string;
    /**
     * User Name
     *
     * @param {string} name
     * @return
     * @return {Team}
     */
    setName(name: string): Team;
    /**
     * Return User Description
     *
     * @return {string} Description
     */
    getDescription(): string;
    /**
     * User Description
     *
     * @param {string} description
     * @return
     * @return {Team}
     */
    setDescription(description: string): Team;
    /**
     * Return User Invitation_code
     *
     * @return {string} Invitation_code
     */
    getInvitation_code(): string;
    /**
     * User Invitation_code
     *
     * @param {string} invitation_code
     * @return
     * @return {Team}
     */
    setInvitation_code(invitation_code: string): Team;
    /**
     * Return User User_id
     *
     * @return {string} User_id
     */
    getUser_id(): string;
    /**
     * User User_id
     *
     * @param {string} user_id
     * @return
     * @return {Team}
     */
    setUser_id(user_id: string): Team;
    /**
     * Return User Slug
     *
     * @return {string} Slug
     */
    getSlug(): string;
    /**
     * User Slug
     *
     * @param {string} slug
     * @return
     * @return {Team}
     */
    setSlug(slug: string): Team;
    constructor();
}