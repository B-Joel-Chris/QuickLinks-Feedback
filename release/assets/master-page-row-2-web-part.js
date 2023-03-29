define("88508357-4fa4-45bd-b3c6-1cc766c2f0e8_0.0.1", ["@microsoft/sp-property-pane","MasterPageRow2WebPartStrings","@microsoft/sp-core-library","@microsoft/sp-webpart-base","react","react-dom"], function(__WEBPACK_EXTERNAL_MODULE__26ea__, __WEBPACK_EXTERNAL_MODULE_FH5U__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_br4S__, __WEBPACK_EXTERNAL_MODULE_cDcd__, __WEBPACK_EXTERNAL_MODULE_faye__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "xjAZ");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+QQQ":
/*!************************************************!*\
  !*** ./node_modules/@pnp/sp/profiles/types.js ***!
  \************************************************/
/*! exports provided: _Profiles, Profiles, UrlZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Profiles", function() { return _Profiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profiles", function() { return Profiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlZone", function() { return UrlZone; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../decorators.js */ "hMpi");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../operations.js */ "UK2s");
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pnp/core */ "JC1J");






class _Profiles extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__["_SPInstance"] {
    /**
     * Creates a new instance of the UserProfileQuery class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this user profile query
     */
    constructor(baseUrl, path = "_api/sp.userprofiles.peoplemanager") {
        super(baseUrl, path);
        this.clientPeoplePickerQuery = (new ClientPeoplePickerQuery(baseUrl)).using(Object(_pnp_core__WEBPACK_IMPORTED_MODULE_5__["AssignFrom"])(this));
        this.profileLoader = (new ProfileLoader(baseUrl)).using(Object(_pnp_core__WEBPACK_IMPORTED_MODULE_5__["AssignFrom"])(this));
    }
    /**
     * The url of the edit profile page for the current user
     */
    getEditProfileLink() {
        return Profiles(this, "EditProfileLink")();
    }
    /**
     * A boolean value that indicates whether the current user's "People I'm Following" list is public
     */
    getIsMyPeopleListPublic() {
        return Profiles(this, "IsMyPeopleListPublic")();
    }
    /**
     * A boolean value that indicates whether the current user is being followed by the specified user
     *
     * @param loginName The account name of the user
     */
    amIFollowedBy(loginName) {
        const q = Profiles(this, "amifollowedby(@v)");
        q.query.set("@v", `'${loginName}'`);
        return q();
    }
    /**
     * A boolean value that indicates whether the current user is following the specified user
     *
     * @param loginName The account name of the user
     */
    amIFollowing(loginName) {
        const q = Profiles(this, "amifollowing(@v)");
        q.query.set("@v", `'${loginName}'`);
        return q();
    }
    /**
     * Gets tags that the current user is following
     *
     * @param maxCount The maximum number of tags to retrieve (default is 20)
     */
    getFollowedTags(maxCount = 20) {
        return Profiles(this, `getfollowedtags(${maxCount})`)();
    }
    /**
     * Gets the people who are following the specified user
     *
     * @param loginName The account name of the user
     */
    getFollowersFor(loginName) {
        const q = Profiles(this, "getfollowersfor(@v)");
        q.query.set("@v", `'${loginName}'`);
        return q();
    }
    /**
     * Gets the people who are following the current user
     *
     */
    get myFollowers() {
        return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__["SPCollection"])(this, "getmyfollowers");
    }
    /**
     * Gets user properties for the current user
     *
     */
    get myProperties() {
        return Profiles(this, "getmyproperties");
    }
    /**
     * Gets the people who the specified user is following
     *
     * @param loginName The account name of the user.
     */
    getPeopleFollowedBy(loginName) {
        const q = Profiles(this, "getpeoplefollowedby(@v)");
        q.query.set("@v", `'${loginName}'`);
        return q();
    }
    /**
     * Gets user properties for the specified user.
     *
     * @param loginName The account name of the user.
     */
    getPropertiesFor(loginName) {
        const q = Profiles(this, "getpropertiesfor(@v)");
        q.query.set("@v", `'${loginName}'`);
        return q();
    }
    /**
     * Gets the 20 most popular hash tags over the past week, sorted so that the most popular tag appears first
     *
     */
    get trendingTags() {
        const q = Profiles(this, null);
        q.concat(".gettrendingtags");
        return q();
    }
    /**
     * Gets the specified user profile property for the specified user
     *
     * @param loginName The account name of the user
     * @param propertyName The case-sensitive name of the property to get
     */
    getUserProfilePropertyFor(loginName, propertyName) {
        const q = Profiles(this, `getuserprofilepropertyfor(accountname=@v, propertyname='${propertyName}')`);
        q.query.set("@v", `'${loginName}'`);
        return q();
    }
    /**
     * Removes the specified user from the user's list of suggested people to follow
     *
     * @param loginName The account name of the user
     */
    hideSuggestion(loginName) {
        const q = Profiles(this, "hidesuggestion(@v)");
        q.query.set("@v", `'${loginName}'`);
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__["spPost"])(q);
    }
    /**
     * A boolean values that indicates whether the first user is following the second user
     *
     * @param follower The account name of the user who might be following the followee
     * @param followee The account name of the user who might be followed by the follower
     */
    isFollowing(follower, followee) {
        const q = Profiles(this, null);
        q.concat(".isfollowing(possiblefolloweraccountname=@v, possiblefolloweeaccountname=@y)");
        q.query.set("@v", `'${follower}'`);
        q.query.set("@y", `'${followee}'`);
        return q();
    }
    /**
     * Uploads and sets the user profile picture (Users can upload a picture to their own profile only). Not supported for batching.
     *
     * @param profilePicSource Blob data representing the user's picture in BMP, JPEG, or PNG format of up to 4.76MB
     */
    setMyProfilePic(profilePicSource) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = async (e) => {
                const buffer = e.target.result;
                try {
                    await Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__["spPost"])(Profiles(this, "setmyprofilepicture"), { body: buffer });
                    resolve();
                }
                catch (e) {
                    reject(e);
                }
            };
            reader.readAsArrayBuffer(profilePicSource);
        });
    }
    /**
     * Sets single value User Profile property
     *
     * @param accountName The account name of the user
     * @param propertyName Property name
     * @param propertyValue Property value
     */
    setSingleValueProfileProperty(accountName, propertyName, propertyValue) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__["spPost"])(Profiles(this, "SetSingleValueProfileProperty"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__["body"])({
            accountName,
            propertyName,
            propertyValue,
        }));
    }
    /**
     * Sets multi valued User Profile property
     *
     * @param accountName The account name of the user
     * @param propertyName Property name
     * @param propertyValues Property values
     */
    setMultiValuedProfileProperty(accountName, propertyName, propertyValues) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__["spPost"])(Profiles(this, "SetMultiValuedProfileProperty"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__["body"])({
            accountName,
            propertyName,
            propertyValues,
        }));
    }
    /**
     * Provisions one or more users' personal sites. (My Site administrator on SharePoint Online only)
     *
     * @param emails The email addresses of the users to provision sites for
     */
    createPersonalSiteEnqueueBulk(...emails) {
        return this.profileLoader.createPersonalSiteEnqueueBulk(emails);
    }
    /**
     * Gets the user profile of the site owner
     *
     */
    get ownerUserProfile() {
        return this.profileLoader.ownerUserProfile;
    }
    /**
     * Gets the user profile for the current user
     */
    get userProfile() {
        return this.profileLoader.userProfile;
    }
    /**
     * Enqueues creating a personal site for this user, which can be used to share documents, web pages, and other files
     *
     * @param interactiveRequest true if interactively (web) initiated request, or false (default) if non-interactively (client) initiated request
     */
    createPersonalSite(interactiveRequest = false) {
        return this.profileLoader.createPersonalSite(interactiveRequest);
    }
    /**
     * Sets the privacy settings for this profile
     *
     * @param share true to make all social data public; false to make all social data private
     */
    shareAllSocialData(share) {
        return this.profileLoader.shareAllSocialData(share);
    }
    /**
     * Resolves user or group using specified query parameters
     *
     * @param queryParams The query parameters used to perform resolve
     */
    clientPeoplePickerResolveUser(queryParams) {
        return this.clientPeoplePickerQuery.clientPeoplePickerResolveUser(queryParams);
    }
    /**
     * Searches for users or groups using specified query parameters
     *
     * @param queryParams The query parameters used to perform search
     */
    clientPeoplePickerSearchUser(queryParams) {
        return this.clientPeoplePickerQuery.clientPeoplePickerSearchUser(queryParams);
    }
}
const Profiles = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__["spInvokableFactory"])(_Profiles);
let ProfileLoader = class ProfileLoader extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__["_SPQueryable"] {
    /**
     * Provisions one or more users' personal sites. (My Site administrator on SharePoint Online only) Doesn't support batching
     *
     * @param emails The email addresses of the users to provision sites for
     */
    createPersonalSiteEnqueueBulk(emails) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__["spPost"])(ProfileLoaderFactory(this, "createpersonalsiteenqueuebulk"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__["body"])({ "emailIDs": emails }));
    }
    /**
     * Gets the user profile of the site owner.
     *
     */
    get ownerUserProfile() {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__["spPost"])(this.getParent(ProfileLoaderFactory, "_api/sp.userprofiles.profileloader.getowneruserprofile"));
    }
    /**
     * Gets the user profile of the current user.
     *
     */
    get userProfile() {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__["spPost"])(ProfileLoaderFactory(this, "getuserprofile"));
    }
    /**
     * Enqueues creating a personal site for this user, which can be used to share documents, web pages, and other files.
     *
     * @param interactiveRequest true if interactively (web) initiated request, or false (default) if non-interactively (client) initiated request
     */
    createPersonalSite(interactiveRequest = false) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__["spPost"])(ProfileLoaderFactory(this, `getuserprofile/createpersonalsiteenque(${interactiveRequest})`));
    }
    /**
     * Sets the privacy settings for this profile
     *
     * @param share true to make all social data public; false to make all social data private.
     */
    shareAllSocialData(share) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__["spPost"])(ProfileLoaderFactory(this, `getuserprofile/shareallsocialdata(${share})`));
    }
};
ProfileLoader = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_3__["defaultPath"])("_api/sp.userprofiles.profileloader.getprofileloader")
], ProfileLoader);
const ProfileLoaderFactory = (baseUrl, path) => {
    return new ProfileLoader(baseUrl, path);
};
let ClientPeoplePickerQuery = class ClientPeoplePickerQuery extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__["_SPQueryable"] {
    /**
     * Resolves user or group using specified query parameters
     *
     * @param queryParams The query parameters used to perform resolve
     */
    async clientPeoplePickerResolveUser(queryParams) {
        const q = ClientPeoplePickerFactory(this, null);
        q.concat(".clientpeoplepickerresolveuser");
        const res = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__["spPost"])(q, this.getBodyFrom(queryParams));
        return JSON.parse(typeof res === "object" ? res.ClientPeoplePickerResolveUser : res);
    }
    /**
     * Searches for users or groups using specified query parameters
     *
     * @param queryParams The query parameters used to perform search
     */
    async clientPeoplePickerSearchUser(queryParams) {
        const q = ClientPeoplePickerFactory(this, null);
        q.concat(".clientpeoplepickersearchuser");
        const res = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__["spPost"])(q, this.getBodyFrom(queryParams));
        return JSON.parse(typeof res === "object" ? res.ClientPeoplePickerSearchUser : res);
    }
    /**
     * Creates ClientPeoplePickerQueryParameters request body
     *
     * @param queryParams The query parameters to create request body
     */
    getBodyFrom(queryParams) {
        return Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__["body"])({ queryParams });
    }
};
ClientPeoplePickerQuery = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_3__["defaultPath"])("_api/sp.ui.applicationpages.clientpeoplepickerwebserviceinterface")
], ClientPeoplePickerQuery);
const ClientPeoplePickerFactory = (baseUrl, path) => {
    return new ClientPeoplePickerQuery(baseUrl, path);
};
/**
 * Specifies the originating zone of a request received.
 */
var UrlZone;
(function (UrlZone) {
    /**
     * Specifies the default zone used for requests unless another zone is specified.
     */
    UrlZone[UrlZone["DefaultZone"] = 0] = "DefaultZone";
    /**
     * Specifies an intranet zone.
     */
    UrlZone[UrlZone["Intranet"] = 1] = "Intranet";
    /**
     * Specifies an Internet zone.
     */
    UrlZone[UrlZone["Internet"] = 2] = "Internet";
    /**
     * Specifies a custom zone.
     */
    UrlZone[UrlZone["Custom"] = 3] = "Custom";
    /**
     * Specifies an extranet zone.
     */
    UrlZone[UrlZone["Extranet"] = 4] = "Extranet";
})(UrlZone || (UrlZone = {}));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "+y5s":
/*!*************************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/cancelable.js ***!
  \*************************************************************/
/*! exports provided: asCancelableScope, cancelableScope, Cancelable, CancelAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asCancelableScope", function() { return asCancelableScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelableScope", function() { return cancelableScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cancelable", function() { return Cancelable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelAction", function() { return CancelAction; });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");

/**
 * Cancelable is a fairly complex behavior as there is a lot to consider through multiple timelines. We have
 * two main cases:
 *
 * 1. basic method that is a single call and returns the result of an operation (return spPost(...))
 * 2. complex method that has multiple async calls within
 *
 * 1. For basic calls the cancel info is attached in init as it is only involved within a single request.
 *    This works because there is only one request and the cancel logic doesn't need to persist across
 *    inheriting instances. Also, many of these requests are so fast canceling is likely unnecessary
 *
 * 2. Complex method present a larger challenge because they are comprised of > 1 request and the promise
 *    that is actually returned to the user is not directly from one of our calls. This promise is the
 *    one "created" by the language when you await. For complex methods we have two things that solve these
 *    needs.
 *
 *    The first is the use of either the cancelableScope decorator or the asCancelableScope method
 *    wrapper. These create an upper level cancel info that is then shared across the child requests within
 *    the complex method. Meaning if I do a files.addChunked the same cancel info (and cancel method)
 *    are set on the current "this" which is user object on which the method was called. This info is then
 *    passed down to any child requests using the original "this" as a base using the construct moment.
 *
 *    The CancelAction behavior is used to apply additional actions to a request once it is canceled. For example
 *    in the case of uploading files chunked in sp we cancel the upload by id.
 */
// this is a special moment used to broadcast when a request is canceled
const MomentName = "__CancelMoment__";
// this value is used to track cancel state and the value is represetented by IScopeInfo
const ScopeId = Symbol.for("CancelScopeId");
// module map of all currently tracked cancel scopes
const cancelScopes = new Map();
/**
 * This method is bound to a scope id and used as the cancel method exposed to the user via cancelable promise
 *
 * @param this unused, the current promise
 * @param scopeId Id bound at creation time
 */
async function cancelPrimitive(scopeId) {
    const scope = cancelScopes.get(scopeId);
    scope.controller.abort();
    if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["isArray"])(scope === null || scope === void 0 ? void 0 : scope.actions)) {
        scope.actions.map(action => scope.currentSelf.on[MomentName](action));
    }
    try {
        await scope.currentSelf.emit[MomentName]();
    }
    catch (e) {
        scope.currentSelf.log(`Error in cancel: ${e}`, 3);
    }
}
/**
 * Creates a new scope id, sets it on the instance's ScopeId property, and adds the info to the map
 *
 * @returns the new scope id (GUID)
 */
function createScope(instance) {
    const id = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["getGUID"])();
    instance[ScopeId] = id;
    cancelScopes.set(id, {
        cancel: cancelPrimitive.bind({}, id),
        actions: [],
        controller: null,
        currentSelf: instance,
    });
    return id;
}
/**
 * Function wrapper that turns the supplied function into a cancellation scope
 *
 * @param func Func to wrap
 * @returns The same func signature, wrapped with our cancel scoping logic
 */
const asCancelableScope = (func) => {
    return function (...args) {
        // ensure we have setup "this" to cancel
        // 1. for single requests the value is set in the behavior's init observer
        // 2. for complex requests the value is set here
        if (!Reflect.has(this, ScopeId)) {
            createScope(this);
        }
        // execute the original function, but don't await it
        const result = func.apply(this, args).finally(() => {
            // remove any cancel scope values tied to this instance
            cancelScopes.delete(this[ScopeId]);
            delete this[ScopeId];
        });
        // ensure the synthetic promise from a complex method has a cancel method
        result.cancel = cancelScopes.get(this[ScopeId]).cancel;
        return result;
    };
};
/**
 * Decorator used to mark multi-step methods to ensure all subrequests are properly cancelled
 */
function cancelableScope(_target, _propertyKey, descriptor) {
    // wrapping the original method
    descriptor.value = asCancelableScope(descriptor.value);
}
/**
 * Allows requests to be canceled by the caller by adding a cancel method to the Promise returned by the library
 *
 * @returns Timeline pipe to setup canelability
 */
function Cancelable() {
    if (!AbortController) {
        throw Error("The current environment appears to not support AbortController, please include a suitable polyfill.");
    }
    return (instance) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        instance.on.construct(function (init, path) {
            if (typeof init !== "string") {
                const parent = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["isArray"])(init) ? init[0] : init;
                if (Reflect.has(parent, ScopeId)) {
                    // ensure we carry over the scope id to the new instance from the parent
                    this[ScopeId] = parent[ScopeId];
                }
                // define the moment's implementation
                this.moments[MomentName] = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["asyncBroadcast"])();
            }
        });
        // init our queryable to support cancellation
        instance.on.init(function () {
            if (!Reflect.has(this, ScopeId)) {
                // ensure we have setup "this" to cancel
                // 1. for single requests this will set the value
                // 2. for complex requests the value is set in asCancelableScope
                const id = createScope(this);
                // if we are creating the scope here, we have not created it within asCancelableScope
                // meaning the finally handler there will not delete the tracked scope reference
                this.on.dispose(() => {
                    cancelScopes.delete(id);
                });
            }
            this.on[this.InternalPromise]((promise) => {
                // when a new promise is created add a cancel method
                promise.cancel = cancelScopes.get(this[ScopeId]).cancel;
                return [promise];
            });
        });
        instance.on.pre(async function (url, init, result) {
            // grab the current scope, update the controller and currentSelf
            const existingScope = cancelScopes.get(this[ScopeId]);
            // if we are here without a scope we are likely running a CancelAction request so we just ignore canceling
            if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["objectDefinedNotNull"])(existingScope)) {
                const controller = new AbortController();
                existingScope.controller = controller;
                existingScope.currentSelf = this;
                if (init.signal) {
                    // we do our best to hook our logic to the existing signal
                    init.signal.addEventListener("abort", () => {
                        existingScope.cancel();
                    });
                }
                else {
                    init.signal = controller.signal;
                }
            }
            return [url, init, result];
        });
        // clean up any cancel info from the object after the request lifecycle is complete
        instance.on.dispose(function () {
            delete this[ScopeId];
            delete this.moments[MomentName];
        });
        return instance;
    };
}
/**
 * Allows you to define an action that is run when a request is cancelled
 *
 * @param action The action to run
 * @returns A timeline pipe used in the request lifecycle
 */
function CancelAction(action) {
    return (instance) => {
        instance.on.pre(async function (...args) {
            const existingScope = cancelScopes.get(this[ScopeId]);
            // if we don't have a scope this request is not using Cancelable so we do nothing
            if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["objectDefinedNotNull"])(existingScope)) {
                if (!Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["isArray"])(existingScope.actions)) {
                    existingScope.actions = [];
                }
                if (existingScope.actions.indexOf(action) < 0) {
                    existingScope.actions.push(action);
                }
            }
            return args;
        });
        return instance;
    };
}
//# sourceMappingURL=cancelable.js.map

/***/ }),

/***/ "/sQB":
/*!**************************************************!*\
  !*** ./node_modules/@pnp/queryable/invokable.js ***!
  \**************************************************/
/*! exports provided: invokable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invokable", function() { return invokable; });
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operations.js */ "h6Ct");
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/core */ "JC1J");


/**
 * Allows a decorated object to be invoked as a function, optionally providing an implementation for that action
 *
 * @param invokeableAction Optional. The logic to execute upon invoking the object as a function.
 * @returns Decorator which applies the invokable logic to the tagged class
 */
function invokable(invokeableAction) {
    if (!Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__["isFunc"])(invokeableAction)) {
        invokeableAction = function (init) {
            return Object(_operations_js__WEBPACK_IMPORTED_MODULE_0__["op"])(this, _operations_js__WEBPACK_IMPORTED_MODULE_0__["get"], init);
        };
    }
    return (target) => {
        return new Proxy(target, {
            construct(clz, args, newTarget) {
                const invokableInstance = Object.assign(function (init) {
                    // the "this" for our invoked object will be set by extendable OR we use invokableInstance directly
                    const localThis = typeof this === "undefined" ? invokableInstance : this;
                    return Reflect.apply(invokeableAction, localThis, [init]);
                }, Reflect.construct(clz, args, newTarget));
                Reflect.setPrototypeOf(invokableInstance, newTarget.prototype);
                return invokableInstance;
            },
        });
    };
}
//# sourceMappingURL=invokable.js.map

/***/ }),

/***/ "0MvI":
/*!***********************************************!*\
  !*** ./node_modules/@pnp/sp/folders/index.js ***!
  \***********************************************/
/*! exports provided: Folder, Folders, folderFromServerRelativePath, folderFromAbsolutePath, folderFromPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.js */ "LZ64");
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.js */ "vttn");
/* harmony import */ var _web_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web.js */ "ymW/");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types.js */ "4tXH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Folder", function() { return _types_js__WEBPACK_IMPORTED_MODULE_3__["Folder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Folders", function() { return _types_js__WEBPACK_IMPORTED_MODULE_3__["Folders"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "folderFromServerRelativePath", function() { return _types_js__WEBPACK_IMPORTED_MODULE_3__["folderFromServerRelativePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "folderFromAbsolutePath", function() { return _types_js__WEBPACK_IMPORTED_MODULE_3__["folderFromAbsolutePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "folderFromPath", function() { return _types_js__WEBPACK_IMPORTED_MODULE_3__["folderFromPath"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "0qgB":
/*!*********************************************************!*\
  !*** ./node_modules/@pnp/queryable/request-builders.js ***!
  \*********************************************************/
/*! exports provided: body, headers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "body", function() { return body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headers", function() { return headers; });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");

/**
 * takes the supplied object of type U, JSON.stringify's it, and sets it as the value of a "body" property
 */
function body(o, previous) {
    return Object.assign({ body: Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["jsS"])(o) }, previous);
}
/**
 * Adds headers to an new/existing RequestInit
 *
 * @param o Headers to add
 * @param previous Any previous partial RequestInit
 * @returns RequestInit combining previous and specified headers
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function headers(o, previous) {
    return Object.assign({}, previous, { headers: { ...previous === null || previous === void 0 ? void 0 : previous.headers, ...o } });
}
//# sourceMappingURL=request-builders.js.map

/***/ }),

/***/ "26ea":
/*!**********************************************!*\
  !*** external "@microsoft/sp-property-pane" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__26ea__;

/***/ }),

/***/ "359w":
/*!**********************************************************!*\
  !*** ./node_modules/@pnp/queryable/queryable-factory.js ***!
  \**********************************************************/
/*! exports provided: queryableFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryableFactory", function() { return queryableFactory; });
function queryableFactory(constructor) {
    return (init, path) => {
        // construct the concrete instance
        const instance = new constructor(init, path);
        // we emit the construct event from the factory because we need all of the decorators and constructors
        // to have fully finished before we emit, which is now true. We type the instance to any to get around
        // the protected nature of emit
        instance.emit.construct(init, path);
        return instance;
    };
}
//# sourceMappingURL=queryable-factory.js.map

/***/ }),

/***/ "3DT9":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/items/types.js ***!
  \*********************************************/
/*! exports provided: _Items, Items, _Item, Item, _ItemVersions, ItemVersions, _ItemVersion, ItemVersion, PagedItemCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Items", function() { return _Items; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Items", function() { return Items; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Item", function() { return _Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_ItemVersions", function() { return _ItemVersions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemVersions", function() { return ItemVersions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_ItemVersion", function() { return _ItemVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemVersion", function() { return ItemVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagedItemCollection", function() { return PagedItemCollection; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _pnp_sp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pnp/sp */ "UKGb");
/* harmony import */ var _lists_types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lists/types.js */ "hy0S");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../decorators.js */ "hMpi");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../operations.js */ "UK2s");








/**
 * Describes a collection of Item objects
 *
 */
let _Items = class _Items extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__["_SPCollection"] {
    /**
    * Gets an Item by id
    *
    * @param id The integer id of the item to retrieve
    */
    getById(id) {
        return Item(this).concat(`(${id})`);
    }
    /**
     * Gets BCS Item by string id
     *
     * @param stringId The string id of the BCS item to retrieve
     */
    getItemByStringId(stringId) {
        // creates an item with the parent list path and append out method call
        return Item([this, this.parentUrl], `getItemByStringId('${stringId}')`);
    }
    /**
     * Skips the specified number of items (https://msdn.microsoft.com/en-us/library/office/fp142385.aspx#sectionSection6)
     *
     * @param skip The starting id where the page should start, use with top to specify pages
     * @param reverse It true the PagedPrev=true parameter is added allowing backwards navigation in the collection
     */
    skip(skip, reverse = false) {
        if (reverse) {
            this.query.set("$skiptoken", `Paged=TRUE&PagedPrev=TRUE&p_ID=${skip}`);
        }
        else {
            this.query.set("$skiptoken", `Paged=TRUE&p_ID=${skip}`);
        }
        return this;
    }
    /**
     * Gets a collection designed to aid in paging through data
     *
     */
    getPaged() {
        return this.using(PagedItemParser(this))();
    }
    /**
     * Adds a new item to the collection
     *
     * @param properties The new items's properties
     * @param listItemEntityTypeFullName The type name of the list's entities
     */
    async add(properties = {}) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_5__["body"])(properties)).then((data) => ({
            data: data,
            item: this.getById(data.Id),
        }));
    }
};
_Items = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_6__["defaultPath"])("items")
], _Items);

const Items = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__["spInvokableFactory"])(_Items);
/**
 * Descrines a single Item instance
 *
 */
class _Item extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__["_SPInstance"] {
    constructor() {
        super(...arguments);
        this.delete = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__["deleteableWithETag"])();
    }
    /**
     * Gets the effective base permissions for the item
     *
     */
    get effectiveBasePermissions() {
        return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__["SPQueryable"])(this, "EffectiveBasePermissions");
    }
    /**
     * Gets the effective base permissions for the item in a UI context
     *
     */
    get effectiveBasePermissionsForUI() {
        return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__["SPQueryable"])(this, "EffectiveBasePermissionsForUI");
    }
    /**
     * Gets the field values for this list item in their HTML representation
     *
     */
    get fieldValuesAsHTML() {
        return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__["SPInstance"])(this, "FieldValuesAsHTML");
    }
    /**
     * Gets the field values for this list item in their text representation
     *
     */
    get fieldValuesAsText() {
        return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__["SPInstance"])(this, "FieldValuesAsText");
    }
    /**
     * Gets the field values for this list item for use in editing controls
     *
     */
    get fieldValuesForEdit() {
        return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__["SPInstance"])(this, "FieldValuesForEdit");
    }
    /**
     * Gets the collection of versions associated with this item
     */
    get versions() {
        return ItemVersions(this);
    }
    /**
     * this item's list
     */
    get list() {
        return this.getParent(_lists_types_js__WEBPACK_IMPORTED_MODULE_4__["List"], "", this.parentUrl.substring(0, this.parentUrl.lastIndexOf("/")));
    }
    /**
     * Updates this list instance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the list
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    async update(properties, eTag = "*") {
        const postBody = Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_5__["body"])(properties, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_5__["headers"])({
            "IF-Match": eTag,
            "X-HTTP-Method": "MERGE",
        }));
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__["spPost"])(Item(this).using(ItemUpdatedParser()), postBody);
        return {
            data,
            item: this,
        };
    }
    /**
     * Moves the list item to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    recycle() {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__["spPost"])(Item(this, "recycle"));
    }
    /**
     * Deletes the item object with options.
     *
     * @param parameters Specifies the options to use when deleting a item.
     */
    async deleteWithParams(parameters) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__["spPost"])(Item(this, "DeleteWithParameters"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_5__["body"])({ parameters }));
    }
    /**
     * Gets a string representation of the full URL to the WOPI frame.
     * If there is no associated WOPI application, or no associated action, an empty string is returned.
     *
     * @param action Display mode: 0: view, 1: edit, 2: mobileView, 3: interactivePreview
     */
    async getWopiFrameUrl(action = 0) {
        const i = Item(this, "getWOPIFrameUrl(@action)");
        i.query.set("@action", action);
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__["spPost"])(i);
    }
    /**
     * Validates and sets the values of the specified collection of fields for the list item.
     *
     * @param formValues The fields to change and their new values.
     * @param bNewDocumentUpdate true if the list item is a document being updated after upload; otherwise false.
     */
    validateUpdateListItem(formValues, bNewDocumentUpdate = false) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__["spPost"])(Item(this, "validateupdatelistitem"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_5__["body"])({ formValues, bNewDocumentUpdate }));
    }
    /**
     * Gets the parent information for this item's list and web
     */
    async getParentInfos() {
        const urlInfo = await this.select("Id", "ParentList/Id", "ParentList/Title", "ParentList/RootFolder/UniqueId", "ParentList/RootFolder/ServerRelativeUrl", "ParentList/RootFolder/ServerRelativePath", "ParentList/ParentWeb/Id", "ParentList/ParentWeb/Url", "ParentList/ParentWeb/ServerRelativeUrl", "ParentList/ParentWeb/ServerRelativePath").expand("ParentList", "ParentList/RootFolder", "ParentList/ParentWeb")();
        return {
            Item: {
                Id: urlInfo.Id,
            },
            ParentList: {
                Id: urlInfo.ParentList.Id,
                Title: urlInfo.ParentList.Title,
                RootFolderServerRelativePath: urlInfo.ParentList.RootFolder.ServerRelativePath,
                RootFolderServerRelativeUrl: urlInfo.ParentList.RootFolder.ServerRelativeUrl,
                RootFolderUniqueId: urlInfo.ParentList.RootFolder.UniqueId,
            },
            ParentWeb: {
                Id: urlInfo.ParentList.ParentWeb.Id,
                ServerRelativePath: urlInfo.ParentList.ParentWeb.ServerRelativePath,
                ServerRelativeUrl: urlInfo.ParentList.ParentWeb.ServerRelativeUrl,
                Url: urlInfo.ParentList.ParentWeb.Url,
            },
        };
    }
    async setImageField(fieldName, imageName, imageContent) {
        const contextInfo = await this.getParentInfos();
        const webUrl = Object(_pnp_sp__WEBPACK_IMPORTED_MODULE_3__["extractWebUrl"])(this.toUrl());
        const q = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__["SPQueryable"])([this, webUrl], "/_api/web/UploadImage");
        q.concat("(listTitle=@a1,imageName=@a2,listId=@a3,itemId=@a4)");
        q.query.set("@a1", `'${contextInfo.ParentList.Title}'`);
        q.query.set("@a2", `'${imageName}'`);
        q.query.set("@a3", `'${contextInfo.ParentList.Id}'`);
        q.query.set("@a4", contextInfo.Item.Id);
        const result = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__["spPost"])(q, { body: imageContent });
        const itemInfo = {
            "type": "thumbnail",
            "fileName": result.Name,
            "nativeFile": {},
            "fieldName": fieldName,
            "serverUrl": contextInfo.ParentWeb.Url.replace(contextInfo.ParentWeb.ServerRelativeUrl, ""),
            "serverRelativeUrl": result.ServerRelativeUrl,
            "id": result.UniqueId,
        };
        return this.validateUpdateListItem([{
                FieldName: fieldName,
                FieldValue: JSON.stringify(itemInfo),
            }]);
    }
}
const Item = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__["spInvokableFactory"])(_Item);
/**
 * Describes a collection of Version objects
 *
 */
let _ItemVersions = class _ItemVersions extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__["_SPCollection"] {
    /**
     * Gets a version by id
     *
     * @param versionId The id of the version to retrieve
     */
    getById(versionId) {
        return ItemVersion(this).concat(`(${versionId})`);
    }
};
_ItemVersions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_6__["defaultPath"])("versions")
], _ItemVersions);

const ItemVersions = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__["spInvokableFactory"])(_ItemVersions);
/**
 * Describes a single Version instance
 *
 */
class _ItemVersion extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__["_SPInstance"] {
    constructor() {
        super(...arguments);
        this.delete = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__["deleteableWithETag"])();
    }
}
const ItemVersion = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__["spInvokableFactory"])(_ItemVersion);
/**
 * Provides paging functionality for list items
 */
class PagedItemCollection {
    constructor(parent, nextUrl, results) {
        this.parent = parent;
        this.nextUrl = nextUrl;
        this.results = results;
    }
    /**
     * If true there are more results available in the set, otherwise there are not
     */
    get hasNext() {
        return typeof this.nextUrl === "string" && this.nextUrl.length > 0;
    }
    /**
     * Gets the next set of results, or resolves to null if no results are available
     */
    async getNext() {
        if (this.hasNext) {
            const items = Items([this.parent, this.nextUrl], "");
            return items.getPaged();
        }
        return null;
    }
}
function PagedItemParser(parent) {
    return Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_5__["parseBinderWithErrorCheck"])(async (r) => {
        const json = await r.json();
        const nextUrl = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_2__["hOP"])(json, "d") && Object(_pnp_core__WEBPACK_IMPORTED_MODULE_2__["hOP"])(json.d, "__next") ? json.d.__next : json["odata.nextLink"];
        return new PagedItemCollection(parent, nextUrl, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_5__["parseODataJSON"])(json));
    });
}
function ItemUpdatedParser() {
    return Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_5__["parseBinderWithErrorCheck"])(async (r) => ({
        etag: r.headers.get("etag"),
    }));
}
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "4kGv":
/*!********************************************!*\
  !*** ./node_modules/@pnp/core/timeline.js ***!
  \********************************************/
/*! exports provided: noInherit, once, Timeline, cloneObserverCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noInherit", function() { return noInherit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "once", function() { return once; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timeline", function() { return Timeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneObserverCollection", function() { return cloneObserverCollection; });
/* harmony import */ var _moments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moments.js */ "DZog");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ "NuLX");


/**
 * Field name to hold any flags on observer functions used to modify their behavior
 */
const flags = Symbol.for("ObserverLifecycleFlags");
/**
 * Bitwise flags to indicate modified behavior
 */
var ObserverLifecycleFlags;
(function (ObserverLifecycleFlags) {
    // eslint-disable-next-line no-bitwise
    ObserverLifecycleFlags[ObserverLifecycleFlags["noInherit"] = 1] = "noInherit";
    // eslint-disable-next-line no-bitwise
    ObserverLifecycleFlags[ObserverLifecycleFlags["once"] = 2] = "once";
})(ObserverLifecycleFlags || (ObserverLifecycleFlags = {}));
/**
 * Creates a filter function for use in Array.filter that will filter OUT any observers with the specified [flag]
 *
 * @param flag The flag used to exclude observers
 * @returns An Array.filter function
 */
// eslint-disable-next-line no-bitwise
const byFlag = (flag) => ((observer) => !((observer[flags] || 0) & flag));
/**
 * Creates an observer lifecycle modification flag application function
 * @param flag The flag to the bound function should add
 * @returns A function that can be used to apply [flag] to any valid observer
 */
const addFlag = (flag) => ((observer) => {
    // eslint-disable-next-line no-bitwise
    observer[flags] = (observer[flags] || 0) | flag;
    return observer;
});
/**
 * Observer lifecycle modifier that indicates this observer should NOT be inherited by any child
 * timelines.
 */
const noInherit = addFlag(1 /* noInherit */);
/**
 * Observer lifecycle modifier that indicates this observer should only fire once per instance, it is then removed.
 *
 * Note: If you have a parent and child timeline "once" will affect both and the observer will fire once for a parent lifecycle
 * and once for a child lifecycle
 */
const once = addFlag(2 /* once */);
/**
 * Timeline represents a set of operations executed in order of definition,
 * with each moment's behavior controlled by the implementing function
 */
class Timeline {
    /**
     * Creates a new instance of Timeline with the supplied moments and optionally any observers to include
     *
     * @param moments The moment object defining this timeline
     * @param observers Any observers to include (optional)
     */
    constructor(moments, observers = {}) {
        this.moments = moments;
        this.observers = observers;
        this._onProxy = null;
        this._emitProxy = null;
        this._inheritingObservers = true;
    }
    /**
     * Apply the supplied behavior(s) to this timeline
     *
     * @param behaviors One or more behaviors
     * @returns `this` Timeline
     */
    using(...behaviors) {
        for (let i = 0; i < behaviors.length; i++) {
            behaviors[i](this);
        }
        return this;
    }
    /**
     * Property allowing access to manage observers on moments within this timeline
     */
    get on() {
        if (this._onProxy === null) {
            this._onProxy = new Proxy(this, {
                get: (target, p) => Object.assign((handler) => {
                    target.cloneObserversOnChange();
                    addObserver(target.observers, p, handler, "add");
                    return target;
                }, {
                    toArray: () => {
                        return Reflect.has(target.observers, p) ? [...Reflect.get(target.observers, p)] : [];
                    },
                    replace: (handler) => {
                        target.cloneObserversOnChange();
                        addObserver(target.observers, p, handler, "replace");
                        return target;
                    },
                    prepend: (handler) => {
                        target.cloneObserversOnChange();
                        addObserver(target.observers, p, handler, "prepend");
                        return target;
                    },
                    clear: () => {
                        if (Reflect.has(target.observers, p)) {
                            target.cloneObserversOnChange();
                            // we trust ourselves that this will be an array
                            target.observers[p].length = 0;
                            return true;
                        }
                        return false;
                    },
                }),
            });
        }
        return this._onProxy;
    }
    /**
     * Shorthand method to emit a logging event tied to this timeline
     *
     * @param message The message to log
     * @param level The level at which the message applies
     */
    log(message, level = 0) {
        this.emit.log(message, level);
    }
    /**
     * Shorthand method to emit an error event tied to this timeline
     *
     * @param e Optional. Any error object to emit. If none is provided no emit occurs
     */
    error(e) {
        if (Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["objectDefinedNotNull"])(e)) {
            this.emit.error(e);
        }
    }
    /**
     * Property allowing access to invoke a moment from within this timeline
     */
    get emit() {
        if (this._emitProxy === null) {
            this._emitProxy = new Proxy(this, {
                get: (target, p) => (...args) => {
                    // handle the case where no observers registered for the target moment
                    const observers = Reflect.has(target.observers, p) ? Reflect.get(target.observers, p) : [];
                    if ((!Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["isArray"])(observers) || observers.length < 1) && p === "error") {
                        // if we are emitting an error, and no error observers are defined, we throw
                        throw Error(`Unhandled Exception: ${args[0]}`);
                    }
                    try {
                        // default to broadcasting any events without specific impl (will apply to log and error)
                        const moment = Reflect.has(target.moments, p) ? Reflect.get(target.moments, p) : p === "init" || p === "dispose" ? Object(_moments_js__WEBPACK_IMPORTED_MODULE_0__["lifecycle"])() : Object(_moments_js__WEBPACK_IMPORTED_MODULE_0__["broadcast"])();
                        // pass control to the individual moment's implementation
                        return Reflect.apply(moment, target, [observers, ...args]);
                    }
                    catch (e) {
                        if (p !== "error") {
                            this.error(e);
                        }
                        else {
                            // if all else fails, re-throw as we are getting errors from error observers meaning something is sideways
                            throw e;
                        }
                    }
                    finally {
                        // here we need to remove any "once" observers
                        Reflect.set(target.observers, p, observers.filter(byFlag(2 /* once */)));
                    }
                },
            });
        }
        return this._emitProxy;
    }
    /**
     * Starts a timeline
     *
     * @description This method first emits "init" to allow for any needed initial conditions then calls execute with any supplied init
     *
     * @param init A value passed into the execute logic from the initiator of the timeline
     * @returns The result of this.execute
     */
    start(init) {
        // initialize our timeline
        this.emit.init();
        // get a ref to the promise returned by execute
        const p = this.execute(init);
        // attach our dispose logic
        p.finally(() => {
            try {
                // provide an opportunity for cleanup of the timeline
                this.emit.dispose();
            }
            catch (e) {
                // shouldn't happen, but possible dispose throws - which may be missed as the usercode await will have resolved.
                const e2 = Object.assign(Error("Error in dispose."), {
                    innerException: e,
                });
                this.error(e2);
            }
        }).catch(() => void (0));
        // give the promise back to the caller
        return p;
    }
    /**
     * By default a timeline references the same observer collection as a parent timeline,
     * if any changes are made to the observers this method first clones them ensuring we
     * maintain a local copy and de-ref the parent
     */
    cloneObserversOnChange() {
        if (this._inheritingObservers) {
            this._inheritingObservers = false;
            this.observers = cloneObserverCollection(this.observers);
        }
    }
}
/**
 * Adds an observer to a given target
 *
 * @param target The object to which events are registered
 * @param moment The name of the moment to which the observer is registered
 * @param addBehavior Determines how the observer is added to the collection
 *
 */
function addObserver(target, moment, observer, addBehavior) {
    if (!Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["isFunc"])(observer)) {
        throw Error("Observers must be functions.");
    }
    if (!Reflect.has(target, moment)) {
        // if we don't have a registration for this moment, then we just add a new prop
        target[moment] = [observer];
    }
    else {
        // if we have an existing property then we follow the specified behavior
        switch (addBehavior) {
            case "add":
                target[moment].push(observer);
                break;
            case "prepend":
                target[moment].unshift(observer);
                break;
            case "replace":
                target[moment].length = 0;
                target[moment].push(observer);
                break;
        }
    }
    return target[moment];
}
function cloneObserverCollection(source) {
    return Reflect.ownKeys(source).reduce((clone, key) => {
        // eslint-disable-next-line no-bitwise
        clone[key] = [...source[key].filter(byFlag(1 /* noInherit */))];
        return clone;
    }, {});
}
//# sourceMappingURL=timeline.js.map

/***/ }),

/***/ "4tXH":
/*!***********************************************!*\
  !*** ./node_modules/@pnp/sp/folders/types.js ***!
  \***********************************************/
/*! exports provided: _Folders, Folders, _Folder, Folder, folderFromServerRelativePath, folderFromAbsolutePath, folderFromPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Folders", function() { return _Folders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Folders", function() { return Folders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Folder", function() { return _Folder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Folder", function() { return Folder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "folderFromServerRelativePath", function() { return folderFromServerRelativePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "folderFromAbsolutePath", function() { return folderFromAbsolutePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "folderFromPath", function() { return folderFromPath; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/odata-url-from.js */ "hTrG");
/* harmony import */ var _items_types_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../items/types.js */ "3DT9");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../decorators.js */ "hMpi");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../operations.js */ "UK2s");
/* harmony import */ var _utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/extract-web-url.js */ "OXUt");
/* harmony import */ var _utils_to_resource_path_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/to-resource-path.js */ "G6u6");
/* harmony import */ var _utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/encode-path-str.js */ "vbtm");
/* harmony import */ var _context_info_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../context-info/index.js */ "Ji9F");












let _Folders = class _Folders extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__["_SPCollection"] {
    /**
     * Gets a folder by it's name
     *
     * @param name Folder's name
     */
    getByUrl(name) {
        return Folder(this).concat(`('${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_10__["encodePath"])(name)}')`);
    }
    /**
     * Adds a new folder by path and should be prefered over add
     *
     * @param serverRelativeUrl The server relative url of the new folder to create
     * @param overwrite True to overwrite an existing folder, default false
     */
    async addUsingPath(serverRelativeUrl, overwrite = false) {
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__["spPost"])(Folders(this, `addUsingPath(DecodedUrl='${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_10__["encodePath"])(serverRelativeUrl)}',overwrite=${overwrite})`));
        return {
            data,
            folder: folderFromServerRelativePath(this, data.ServerRelativeUrl),
        };
    }
};
_Folders = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_6__["defaultPath"])("folders")
], _Folders);

const Folders = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__["spInvokableFactory"])(_Folders);
class _Folder extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__["_SPInstance"] {
    constructor() {
        super(...arguments);
        this.delete = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__["deleteableWithETag"])();
    }
    /**
     * Gets this folder's sub folders
     *
     */
    get folders() {
        return Folders(this);
    }
    /**
     * Gets this folder's list item field values
     *
     */
    get listItemAllFields() {
        return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__["SPInstance"])(this, "listItemAllFields");
    }
    /**
     * Gets the parent folder, if available
     *
     */
    get parentFolder() {
        return Folder(this, "parentFolder");
    }
    /**
     * Gets this folder's properties
     *
     */
    get properties() {
        return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__["SPInstance"])(this, "properties");
    }
    /**
     * Gets this folder's storage metrics information
     *
     */
    get storageMetrics() {
        return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__["SPInstance"])(this, "storagemetrics");
    }
    /**
     * Updates folder's properties
     * @param props Folder's properties to update
     */
    async update(props) {
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__["spPostMerge"])(this, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__["body"])(props));
        return {
            data,
            folder: this,
        };
    }
    /**
     * Moves the folder to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    recycle() {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__["spPost"])(Folder(this, "recycle"));
    }
    /**
     * Gets the associated list item for this folder, loading the default properties
     */
    async getItem(...selects) {
        const q = this.listItemAllFields;
        const d = await q.select(...selects)();
        if (d["odata.null"]) {
            throw Error("No associated item was found for this folder. It may be the root folder, which does not have an item.");
        }
        return Object.assign(Object(_items_types_js__WEBPACK_IMPORTED_MODULE_5__["Item"])([this, Object(_utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_4__["odataUrlFrom"])(d)]), d);
    }
    async moveByPath(destUrl, ...rest) {
        let options = {
            KeepBoth: false,
            ShouldBypassSharedLocks: true,
            RetainEditorAndModifiedOnMove: false,
        };
        if (rest.length === 1) {
            if (typeof rest[0] === "boolean") {
                options.KeepBoth = rest[0];
            }
            else if (typeof rest[0] === "object") {
                options = { ...options, ...rest[0] };
            }
        }
        const urlInfo = await this.getParentInfos();
        const uri = new URL(urlInfo.ParentWeb.Url);
        await Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__["spPost"])(Folder([this, urlInfo.ParentWeb.Url], "/_api/SP.MoveCopyUtil.MoveFolderByPath()"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__["body"])({
            destPath: Object(_utils_to_resource_path_js__WEBPACK_IMPORTED_MODULE_9__["toResourcePath"])(Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__["isUrlAbsolute"])(destUrl) ? destUrl : Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__["combine"])(uri.origin, destUrl)),
            options,
            srcPath: Object(_utils_to_resource_path_js__WEBPACK_IMPORTED_MODULE_9__["toResourcePath"])(Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__["combine"])(uri.origin, urlInfo.Folder.ServerRelativeUrl)),
        }));
        return folderFromPath(this, destUrl);
    }
    async copyByPath(destUrl, ...rest) {
        let options = {
            ShouldBypassSharedLocks: true,
            ResetAuthorAndCreatedOnCopy: true,
            KeepBoth: false,
        };
        if (rest.length === 1) {
            if (typeof rest[0] === "boolean") {
                options.KeepBoth = rest[0];
            }
            else if (typeof rest[0] === "object") {
                options = { ...options, ...rest[0] };
            }
        }
        const urlInfo = await this.getParentInfos();
        const uri = new URL(urlInfo.ParentWeb.Url);
        await Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__["spPost"])(Folder([this, urlInfo.ParentWeb.Url], "/_api/SP.MoveCopyUtil.CopyFolderByPath()"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__["body"])({
            destPath: Object(_utils_to_resource_path_js__WEBPACK_IMPORTED_MODULE_9__["toResourcePath"])(Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__["isUrlAbsolute"])(destUrl) ? destUrl : Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__["combine"])(uri.origin, destUrl)),
            options,
            srcPath: Object(_utils_to_resource_path_js__WEBPACK_IMPORTED_MODULE_9__["toResourcePath"])(Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__["combine"])(uri.origin, urlInfo.Folder.ServerRelativeUrl)),
        }));
        return folderFromPath(this, destUrl);
    }
    /**
     * Deletes the folder object with options.
     *
     * @param parameters Specifies the options to use when deleting a folder.
     */
    async deleteWithParams(parameters) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__["spPost"])(Folder(this, "DeleteWithParameters"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__["body"])({ parameters }));
    }
    /**
     * Create the subfolder inside the current folder, as specified by the leafPath
     *
     * @param leafPath leafName of the new folder
     */
    async addSubFolderUsingPath(leafPath) {
        await Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__["spPost"])(Folder(this, "AddSubFolderUsingPath"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__["body"])({ leafPath: Object(_utils_to_resource_path_js__WEBPACK_IMPORTED_MODULE_9__["toResourcePath"])(leafPath) }));
        return this.folders.getByUrl(leafPath);
    }
    /**
     * Gets the parent information for this folder's list and web
     */
    async getParentInfos() {
        const urlInfo = await this.select("ServerRelativeUrl", "ListItemAllFields/ParentList/Id", "ListItemAllFields/ParentList/RootFolder/UniqueId", "ListItemAllFields/ParentList/RootFolder/ServerRelativeUrl", "ListItemAllFields/ParentList/RootFolder/ServerRelativePath", "ListItemAllFields/ParentList/ParentWeb/Id", "ListItemAllFields/ParentList/ParentWeb/Url", "ListItemAllFields/ParentList/ParentWeb/ServerRelativeUrl", "ListItemAllFields/ParentList/ParentWeb/ServerRelativePath").expand("ListItemAllFields/ParentList", "ListItemAllFields/ParentList/RootFolder", "ListItemAllFields/ParentList/ParentWeb")();
        return {
            Folder: {
                ServerRelativeUrl: urlInfo.ServerRelativeUrl,
            },
            ParentList: {
                Id: urlInfo.ListItemAllFields.ParentList.Id,
                RootFolderServerRelativePath: urlInfo.ListItemAllFields.ParentList.RootFolder.ServerRelativePath,
                RootFolderServerRelativeUrl: urlInfo.ListItemAllFields.ParentList.RootFolder.ServerRelativeUrl,
                RootFolderUniqueId: urlInfo.ListItemAllFields.ParentList.RootFolder.UniqueId,
            },
            ParentWeb: {
                Id: urlInfo.ListItemAllFields.ParentList.ParentWeb.Id,
                ServerRelativePath: urlInfo.ListItemAllFields.ParentList.ParentWeb.ServerRelativePath,
                ServerRelativeUrl: urlInfo.ListItemAllFields.ParentList.ParentWeb.ServerRelativeUrl,
                Url: urlInfo.ListItemAllFields.ParentList.ParentWeb.Url,
            },
        };
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _pnp_queryable__WEBPACK_IMPORTED_MODULE_2__["cancelableScope"]
], _Folder.prototype, "moveByPath", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _pnp_queryable__WEBPACK_IMPORTED_MODULE_2__["cancelableScope"]
], _Folder.prototype, "copyByPath", null);
const Folder = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__["spInvokableFactory"])(_Folder);
/**
 * Creates an IFolder instance given a base object and a server relative path
 *
 * @param base Valid SPQueryable from which the observers will be used and the web url extracted
 * @param serverRelativePath The server relative url to the folder (ex: '/sites/dev/documents/folder3')
 * @returns IFolder instance referencing the folder described by the supplied parameters
 */
function folderFromServerRelativePath(base, serverRelativePath) {
    return Folder([base, Object(_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_8__["extractWebUrl"])(base.toUrl())], `_api/web/getFolderByServerRelativePath(decodedUrl='${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_10__["encodePath"])(serverRelativePath)}')`);
}
/**
 * Creates an IFolder instance given a base object and an absolute path
 *
 * @param base Valid SPQueryable from which the observers will be used
 * @param serverRelativePath The absolute url to the folder (ex: 'https://tenant.sharepoint.com/sites/dev/documents/folder/')
 * @returns IFolder instance referencing the folder described by the supplied parameters
 */
async function folderFromAbsolutePath(base, absoluteFolderPath) {
    const { WebFullUrl } = await base.getContextInfo(absoluteFolderPath);
    const { pathname } = new URL(absoluteFolderPath);
    return folderFromServerRelativePath(Folder([base, Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__["combine"])(WebFullUrl, "_api/web")]), decodeURIComponent(pathname));
}
/**
 * Creates an IFolder intance given a base object and either an absolute or server relative path to a folder
 *
 * @param base Valid SPQueryable from which the observers will be used
 * @param serverRelativePath server relative or absolute url to the file (ex: 'https://tenant.sharepoint.com/sites/dev/documents/folder' or '/sites/dev/documents/folder')
 * @returns IFile instance referencing the file described by the supplied parameters
 */
async function folderFromPath(base, path) {
    return (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__["isUrlAbsolute"])(path) ? folderFromAbsolutePath : folderFromServerRelativePath)(base, path);
}
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "6ECn":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@microsoft/spfx-heft-plugins/node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./lib/webparts/masterPageRow2/components/MasterPageRow2.css ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/@microsoft/spfx-heft-plugins/node_modules/css-loader/dist/runtime/api.js */ "Z+AG")(false);
// Module
exports.push([module.i, ".Containers1{min-width:100%!important;padding:2px 10px;height:265px;color:#000;font-size:12px;-ms-flex-pack:center;justify-content:center;text-align:center}.rowMains{box-shadow:0 4px 8px 0 rgba(0,0,0,.2);transition:.3s;width:31.999999%;height:140px;overflow:hidden;float:right;background-color:#fff;margin:-144px 15px;border:1px solid #fff;border-radius:20px}.row11{z-index:-1;background-color:#0078d4;margin:5px;border-radius:10px;color:#000;text-align:center}.row2container__part1{box-shadow:0 4px 8px 0 rgba(0,0,0,.2);transition:.3s;width:64.699%;height:250px;overflow:hidden;background-color:#fff;margin:4px;border:1px solid #fff;border-radius:20px}.row2container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.row2container__part2{display:grid;grid-template-columns:auto auto auto;height:115px;float:right;width:32.5%;margin:-259px 11.5px;padding:5px;color:#000}.row2container__part2__item{box-shadow:0 4px 8px 0 rgba(0,0,0,.2);background-color:#fff;margin:1px;border:1px solid #fff;border-radius:8px;padding:1px;height:50px;width:80px}", ""]);


/***/ }),

/***/ "6k7F":
/*!********************************************!*\
  !*** ./node_modules/@pnp/sp/webs/index.js ***!
  \********************************************/
/*! exports provided: Web, Webs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ "dVsc");
/* harmony import */ var _fi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fi.js */ "v6VW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Web", function() { return _types_js__WEBPACK_IMPORTED_MODULE_0__["Web"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Webs", function() { return _types_js__WEBPACK_IMPORTED_MODULE_0__["Webs"]; });




Reflect.defineProperty(_fi_js__WEBPACK_IMPORTED_MODULE_1__["SPFI"].prototype, "web", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.create(_types_js__WEBPACK_IMPORTED_MODULE_0__["Web"]);
    },
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "8oxB":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "9twg":
/*!*********************************************************************!*\
  !*** ./lib/webparts/masterPageRow2/components/Feedback/Feedback.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Feedback_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Feedback.scss */ "u47h");
/* harmony import */ var _pnpConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pnpConfig */ "EXJb");
/* harmony import */ var _pnp_sp_sputilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pnp/sp/sputilities */ "Ku5p");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


// import {IoMdSend} from "react-icons/io";


var Feedback = function (props) {
    var _a = react__WEBPACK_IMPORTED_MODULE_0__["useState"](), fb = _a[0], setFb = _a[1];
    var postFeedback = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _sp, list;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _sp = Object(_pnpConfig__WEBPACK_IMPORTED_MODULE_2__["getSP"])(props.context);
                    return [4 /*yield*/, _sp.web.lists.getByTitle("FeedBackForm-List").items.add({
                            Complients_x002f_Comments: fb,
                            DepartmentNameId: props.depID
                        })];
                case 1:
                    list = _a.sent();
                    console.log(list);
                    _sp.utility.sendEmail({
                        To: [props.repman],
                        Subject: "Recived Feedback ",
                        Body: "You got feedback",
                        AdditionalHeaders: {
                            "content-type": "text/html"
                        }
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    console.log(fb);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'rowMains' },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "feedbackTitle" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Enter Feedback:")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'formDiv' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "field" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("textarea", { placeholder: 'Feedback......', onChange: function (e) { return setFb(e.target.value); } })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'submitBtn' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { onClick: function () { return postFeedback(); } }, "Submit Feedback"))))
    // <div><h4>Opinion Poll</h4></div>
    );
};
/* harmony default export */ __webpack_exports__["default"] = (Feedback);


/***/ }),

/***/ "AfLD":
/*!***************************************************!*\
  !*** ./node_modules/@pnp/sp/sputilities/types.js ***!
  \***************************************************/
/*! exports provided: _Utilities, Utilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Utilities", function() { return _Utilities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utilities", function() { return Utilities; });
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/extract-web-url.js */ "OXUt");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operations.js */ "UK2s");
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pnp/core */ "JC1J");





class _Utilities extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__["_SPQueryable"] {
    constructor(base, methodName = "") {
        super(base);
        this._url = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_4__["combine"])(Object(_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_2__["extractWebUrl"])(this._url), `_api/SP.Utilities.Utility.${methodName}`);
    }
    excute(props) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_3__["spPost"])(this, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__["body"])(props));
    }
    sendEmail(properties) {
        if (properties.AdditionalHeaders) {
            // we have to remap the additional headers into this format #2253
            properties.AdditionalHeaders = Reflect.ownKeys(properties.AdditionalHeaders).map(key => ({
                Key: key,
                Value: Reflect.get(properties.AdditionalHeaders, key),
                ValueType: "Edm.String",
            }));
        }
        return UtilitiesCloneFactory(this, "SendEmail").excute({ properties });
    }
    getCurrentUserEmailAddresses() {
        return UtilitiesCloneFactory(this, "GetCurrentUserEmailAddresses").excute({});
    }
    resolvePrincipal(input, scopes, sources, inputIsEmailOnly, addToUserInfoList, matchUserInfoList = false) {
        const params = {
            addToUserInfoList,
            input,
            inputIsEmailOnly,
            matchUserInfoList,
            scopes,
            sources,
        };
        return UtilitiesCloneFactory(this, "ResolvePrincipalInCurrentContext").excute(params);
    }
    searchPrincipals(input, scopes, sources, groupName, maxCount) {
        const params = {
            groupName: groupName,
            input: input,
            maxCount: maxCount,
            scopes: scopes,
            sources: sources,
        };
        return UtilitiesCloneFactory(this, "SearchPrincipalsUsingContextWeb").excute(params);
    }
    createEmailBodyForInvitation(pageAddress) {
        const params = {
            pageAddress: pageAddress,
        };
        return UtilitiesCloneFactory(this, "CreateEmailBodyForInvitation").excute(params);
    }
    expandGroupsToPrincipals(inputs, maxCount = 30) {
        const params = {
            inputs: inputs,
            maxCount: maxCount,
        };
        const clone = UtilitiesCloneFactory(this, "ExpandGroupsToPrincipals");
        return clone.excute(params);
    }
}
const Utilities = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__["spInvokableFactory"])(_Utilities);
const UtilitiesCloneFactory = (base, path) => Utilities(base, path);
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "B3L+":
/*!********************************************!*\
  !*** ./node_modules/@pnp/logging/index.js ***!
  \********************************************/
/*! exports provided: ConsoleListener, FunctionListener, LogLevel, Logger, PnPLogging */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PnPLogging", function() { return PnPLogging; });
/* harmony import */ var _listeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listeners.js */ "aH1g");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConsoleListener", function() { return _listeners_js__WEBPACK_IMPORTED_MODULE_0__["ConsoleListener"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FunctionListener", function() { return _listeners_js__WEBPACK_IMPORTED_MODULE_0__["FunctionListener"]; });


/**
 * A set of logging levels
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Verbose"] = 0] = "Verbose";
    LogLevel[LogLevel["Info"] = 1] = "Info";
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    LogLevel[LogLevel["Error"] = 3] = "Error";
    LogLevel[LogLevel["Off"] = 99] = "Off";
})(LogLevel || (LogLevel = {}));
const _subscribers = [];
let _activeLogLevel = 2 /* Warning */;
/**
 * Class used to subscribe ILogListener and log messages throughout an application
 *
 */
class Logger {
    /**
   * Gets or sets the active log level to apply for log filtering
   */
    static get activeLogLevel() {
        return _activeLogLevel;
    }
    static set activeLogLevel(value) {
        _activeLogLevel = value;
    }
    /**
     * Adds ILogListener instances to the set of subscribed listeners
     *
     * @param listeners One or more listeners to subscribe to this log
     */
    static subscribe(...listeners) {
        _subscribers.push(...listeners);
    }
    /**
   * Clears the subscribers collection, returning the collection before modification
   */
    static clearSubscribers() {
        const s = _subscribers.slice(0);
        _subscribers.length = 0;
        return s;
    }
    /**
   * Gets the current subscriber count
   */
    static get count() {
        return _subscribers.length;
    }
    /**
   * Writes the supplied string to the subscribed listeners
   *
   * @param message The message to write
   * @param level [Optional] if supplied will be used as the level of the entry (Default: LogLevel.Info)
   */
    static write(message, level = 1 /* Info */) {
        Logger.log({ level: level, message: message });
    }
    /**
   * Writes the supplied string to the subscribed listeners
   *
   * @param json The json object to stringify and write
   * @param level [Optional] if supplied will be used as the level of the entry (Default: LogLevel.Info)
   */
    static writeJSON(json, level = 1 /* Info */) {
        Logger.write(JSON.stringify(json), level);
    }
    /**
   * Logs the supplied entry to the subscribed listeners
   *
   * @param entry The message to log
   */
    static log(entry) {
        if (entry !== undefined && Logger.activeLogLevel <= entry.level) {
            _subscribers.map(subscriber => subscriber.log(entry));
        }
    }
    /**
   * Logs an error object to the subscribed listeners
   *
   * @param err The error object
   */
    static error(err) {
        Logger.log({ data: err, level: 3 /* Error */, message: err.message });
    }
}
function PnPLogging(activeLevel) {
    return (instance) => {
        instance.on.log(function (message, level) {
            if (activeLevel <= level) {
                _subscribers.map(subscriber => subscriber.log({ level, message }));
            }
        });
        return instance;
    };
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "Bwa7":
/*!*******************************************!*\
  !*** ./node_modules/@pnp/sp/lists/web.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webs/types.js */ "dVsc");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "hy0S");
/* harmony import */ var _utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/odata-url-from.js */ "hTrG");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/encode-path-str.js */ "vbtm");






Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__["addProp"])(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__["_Web"], "lists", _types_js__WEBPACK_IMPORTED_MODULE_2__["Lists"]);
Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__["addProp"])(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__["_Web"], "siteUserInfoList", _types_js__WEBPACK_IMPORTED_MODULE_2__["List"]);
Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__["addProp"])(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__["_Web"], "defaultDocumentLibrary", _types_js__WEBPACK_IMPORTED_MODULE_2__["List"]);
Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__["addProp"])(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__["_Web"], "customListTemplates", _spqueryable_js__WEBPACK_IMPORTED_MODULE_4__["SPCollection"], "getcustomlisttemplates");
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__["_Web"].prototype.getList = function (listRelativeUrl) {
    return Object(_types_js__WEBPACK_IMPORTED_MODULE_2__["List"])(this, `getList('${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_5__["encodePath"])(listRelativeUrl)}')`);
};
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__["_Web"].prototype.getCatalog = async function (type) {
    const data = await Object(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__["Web"])(this, `getcatalog(${type})`).select("Id")();
    return Object(_types_js__WEBPACK_IMPORTED_MODULE_2__["List"])([this, Object(_utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_3__["odataUrlFrom"])(data)]);
};
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "DZog":
/*!*******************************************!*\
  !*** ./node_modules/@pnp/core/moments.js ***!
  \*******************************************/
/*! exports provided: broadcast, asyncBroadcast, reduce, asyncReduce, request, lifecycle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "broadcast", function() { return broadcast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncBroadcast", function() { return asyncBroadcast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return reduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncReduce", function() { return asyncReduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "request", function() { return request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lifecycle", function() { return lifecycle; });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "NuLX");

/**
 * Emits to all registered observers the supplied arguments. Any values returned by the observers are ignored
 *
 * @returns void
 */
function broadcast() {
    return function (observers, ...args) {
        const obs = [...observers];
        for (let i = 0; i < obs.length; i++) {
            Reflect.apply(obs[i], this, args);
        }
    };
}
/**
 * Defines a moment that executes each observer asynchronously in parallel awaiting all promises to resolve or reject before continuing
 *
 * @returns The final set of arguments
 */
function asyncBroadcast() {
    return async function (observers, ...args) {
        // get our initial values
        const r = args;
        const obs = [...observers];
        const promises = [];
        for (let i = 0; i < obs.length; i++) {
            promises.push(Reflect.apply(obs[i], this, r));
        }
        return Promise.all(promises);
    };
}
/**
 * Defines a moment that executes each observer synchronously, passing the returned arguments as the arguments to the next observer.
 * This is very much like the redux pattern taking the arguments as the state which each observer may modify then returning a new state
 *
 * @returns The final set of arguments
 */
function reduce() {
    return function (observers, ...args) {
        const obs = [...observers];
        return obs.reduce((params, func) => Reflect.apply(func, this, params), args);
    };
}
/**
 * Defines a moment that executes each observer asynchronously, awaiting the result and passes the returned arguments as the arguments to the next observer.
 * This is very much like the redux pattern taking the arguments as the state which each observer may modify then returning a new state
 *
 * @returns The final set of arguments
 */
function asyncReduce() {
    return async function (observers, ...args) {
        const obs = [...observers];
        return obs.reduce((prom, func) => prom.then((params) => Reflect.apply(func, this, params)), Promise.resolve(args));
    };
}
/**
 * Defines a moment where the first registered observer is used to asynchronously execute a request, returning a single result
 * If no result is returned (undefined) no further action is taken and the result will be undefined (i.e. additional observers are not used)
 *
 * @returns The result returned by the first registered observer
 */
function request() {
    return async function (observers, ...args) {
        if (!Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["isArray"])(observers) || observers.length < 1) {
            return undefined;
        }
        const handler = observers[0];
        return Reflect.apply(handler, this, args);
    };
}
/**
 * Defines a special moment used to configure the timeline itself before starting. Each observer is executed in order,
 * possibly modifying the "this" instance, with the final product returned
 *
 */
function lifecycle() {
    return function (observers, ...args) {
        const obs = [...observers];
        // process each handler which updates our instance in order
        // very similar to asyncReduce but the state is the object itself
        for (let i = 0; i < obs.length; i++) {
            Reflect.apply(obs[i], this, args);
        }
        return this;
    };
}
//# sourceMappingURL=moments.js.map

/***/ }),

/***/ "EXJb":
/*!*************************************************************!*\
  !*** ./lib/webparts/masterPageRow2/components/pnpConfig.js ***!
  \*************************************************************/
/*! exports provided: getSP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSP", function() { return getSP; });
/* harmony import */ var _pnp_sp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/sp */ "UKGb");
/* harmony import */ var _pnp_logging__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/logging */ "B3L+");
/* harmony import */ var _pnp_sp_webs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/sp/webs */ "6k7F");
/* harmony import */ var _pnp_sp_lists__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pnp/sp/lists */ "J7sA");
/* harmony import */ var _pnp_sp_items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pnp/sp/items */ "lYrR");
/* harmony import */ var _pnp_sp_batching__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pnp/sp/batching */ "pAcn");






var _sp = null;
var getSP = function (context) {
    if (_sp === null && context !== null) {
        //You must add the @pnp/logging package to include the PnPLogging behavior it is no longer a peer dependency
        // The LogLevel set's at what level a message will be written to the console
        _sp = Object(_pnp_sp__WEBPACK_IMPORTED_MODULE_0__["spfi"])().using(Object(_pnp_sp__WEBPACK_IMPORTED_MODULE_0__["SPFx"])(context)).using(Object(_pnp_logging__WEBPACK_IMPORTED_MODULE_1__["PnPLogging"])(2 /* Warning */));
    }
    return _sp;
};


/***/ }),

/***/ "EjWy":
/*!************************************************!*\
  !*** ./node_modules/@pnp/sp/site-users/web.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webs/types.js */ "dVsc");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "y+KB");
/* harmony import */ var _utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/odata-url-from.js */ "hTrG");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../operations.js */ "UK2s");





Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__["addProp"])(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__["_Web"], "siteUsers", _types_js__WEBPACK_IMPORTED_MODULE_2__["SiteUsers"]);
Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__["addProp"])(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__["_Web"], "currentUser", _types_js__WEBPACK_IMPORTED_MODULE_2__["SiteUser"]);
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__["_Web"].prototype.ensureUser = async function (logonName) {
    const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__["spPost"])(Object(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__["Web"])(this, "ensureuser"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__["body"])({ logonName }));
    return {
        data,
        user: Object(_types_js__WEBPACK_IMPORTED_MODULE_2__["SiteUser"])([this, Object(_utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_3__["odataUrlFrom"])(data)]),
    };
};
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__["_Web"].prototype.getUserById = function (id) {
    return Object(_types_js__WEBPACK_IMPORTED_MODULE_2__["SiteUser"])(this, `getUserById(${id})`);
};
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "F4qD":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/spqueryable.js ***!
  \*********************************************/
/*! exports provided: spInvokableFactory, _SPQueryable, SPQueryable, _SPCollection, SPCollection, _SPInstance, SPInstance, deleteable, deleteableWithETag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spInvokableFactory", function() { return spInvokableFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_SPQueryable", function() { return _SPQueryable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPQueryable", function() { return SPQueryable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_SPCollection", function() { return _SPCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPCollection", function() { return SPCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_SPInstance", function() { return _SPInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPInstance", function() { return SPInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteable", function() { return deleteable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteableWithETag", function() { return deleteableWithETag; });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operations.js */ "UK2s");



const spInvokableFactory = (f) => {
    return Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__["queryableFactory"])(f);
};
/**
 * SharePointQueryable Base Class
 *
 */
class _SPQueryable extends _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__["Queryable"] {
    /**
     * Creates a new instance of the SharePointQueryable class
     *
     * @constructor
     * @param base A string or SharePointQueryable that should form the base part of the url
     *
     */
    constructor(base, path) {
        if (typeof base === "string") {
            let url = "";
            let parentUrl = "";
            // we need to do some extra parsing to get the parent url correct if we are
            // being created from just a string.
            if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["isUrlAbsolute"])(base) || base.lastIndexOf("/") < 0) {
                parentUrl = base;
                url = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["combine"])(base, path);
            }
            else if (base.lastIndexOf("/") > base.lastIndexOf("(")) {
                // .../items(19)/fields
                const index = base.lastIndexOf("/");
                parentUrl = base.slice(0, index);
                path = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["combine"])(base.slice(index), path);
                url = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["combine"])(parentUrl, path);
            }
            else {
                // .../items(19)
                const index = base.lastIndexOf("(");
                parentUrl = base.slice(0, index);
                url = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["combine"])(base, path);
            }
            // init base with corrected string value
            super(url);
            this.parentUrl = parentUrl;
        }
        else {
            super(base, path);
            const q = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["isArray"])(base) ? base[0] : base;
            this.parentUrl = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["isArray"])(base) ? base[1] : q.toUrl();
            const target = q.query.get("@target");
            if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["objectDefinedNotNull"])(target)) {
                this.query.set("@target", target);
            }
        }
    }
    /**
     * Gets the full url with query information
     */
    toRequestUrl() {
        const aliasedParams = new URLSearchParams(this.query);
        // this regex is designed to locate aliased parameters within url paths. These may have the form:
        // /something(!@p1::value)
        // /something(!@p1::value, param=value)
        // /something(param=value,!@p1::value)
        // /something(param=value,!@p1::value,param=value)
        // /something(param=!@p1::value)
        // there could be spaces or not around the boundaries
        let url = this.toUrl().replace(/([( *| *, *| *= *])'!(@.*?)::(.*?)'([ *)| *, *])/ig, (match, frontBoundary, labelName, value, endBoundary) => {
            this.log(`Rewriting aliased parameter from match ${match} to label: ${labelName} value: ${value}`, 0);
            aliasedParams.set(labelName, `'${value}'`);
            return `${frontBoundary}${labelName}${endBoundary}`;
        });
        const query = aliasedParams.toString();
        if (!Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["stringIsNullOrEmpty"])(query)) {
            url += `${url.indexOf("?") > -1 ? "&" : "?"}${query}`;
        }
        return url;
    }
    /**
     * Choose which fields to return
     *
     * @param selects One or more fields to return
     */
    select(...selects) {
        if (selects.length > 0) {
            this.query.set("$select", selects.join(","));
        }
        return this;
    }
    /**
     * Expands fields such as lookups to get additional data
     *
     * @param expands The Fields for which to expand the values
     */
    expand(...expands) {
        if (expands.length > 0) {
            this.query.set("$expand", expands.join(","));
        }
        return this;
    }
    /**
     * Gets a parent for this instance as specified
     *
     * @param factory The contructor for the class to create
     */
    getParent(factory, path, base = this.parentUrl) {
        const parent = factory([this, base], path);
        const t = "@target";
        if (this.query.has(t)) {
            parent.query.set(t, this.query.get(t));
        }
        return parent;
    }
}
const SPQueryable = spInvokableFactory(_SPQueryable);
/**
 * Represents a REST collection which can be filtered, paged, and selected
 *
 */
class _SPCollection extends _SPQueryable {
    /**
     * Filters the returned collection (https://msdn.microsoft.com/en-us/library/office/fp142385.aspx#bk_supported)
     *
     * @param filter The string representing the filter query
     */
    filter(filter) {
        this.query.set("$filter", filter);
        return this;
    }
    /**
     * Orders based on the supplied fields
     *
     * @param orderby The name of the field on which to sort
     * @param ascending If false DESC is appended, otherwise ASC (default)
     */
    orderBy(orderBy, ascending = true) {
        const o = "$orderby";
        const query = this.query.has(o) ? this.query.get(o).split(",") : [];
        query.push(`${orderBy} ${ascending ? "asc" : "desc"}`);
        this.query.set(o, query.join(","));
        return this;
    }
    /**
     * Skips the specified number of items
     *
     * @param skip The number of items to skip
     */
    skip(skip) {
        this.query.set("$skip", skip.toString());
        return this;
    }
    /**
     * Limits the query to only return the specified number of items
     *
     * @param top The query row limit
     */
    top(top) {
        this.query.set("$top", top.toString());
        return this;
    }
}
const SPCollection = spInvokableFactory(_SPCollection);
/**
 * Represents an instance that can be selected
 *
 */
class _SPInstance extends _SPQueryable {
}
const SPInstance = spInvokableFactory(_SPInstance);
/**
 * Adds the a delete method to the tagged class taking no parameters and calling spPostDelete
 */
function deleteable() {
    return function () {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_2__["spPostDelete"])(this);
    };
}
function deleteableWithETag() {
    return function (eTag = "*") {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_2__["spPostDeleteETag"])(this, {}, eTag);
    };
}
//# sourceMappingURL=spqueryable.js.map

/***/ }),

/***/ "FH5U":
/*!***********************************************!*\
  !*** external "MasterPageRow2WebPartStrings" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_FH5U__;

/***/ }),

/***/ "FMsJ":
/*!********************************************************************************!*\
  !*** ./lib/webparts/masterPageRow2/components/ImageSlider/ImageSlider.scss.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./ImageSlider.css */ "JEPe");
var styles = {};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "G6u6":
/*!********************************************************!*\
  !*** ./node_modules/@pnp/sp/utils/to-resource-path.js ***!
  \********************************************************/
/*! exports provided: toResourcePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toResourcePath", function() { return toResourcePath; });
function toResourcePath(url) {
    return {
        DecodedUrl: url,
    };
}
//# sourceMappingURL=to-resource-path.js.map

/***/ }),

/***/ "GfGO":
/*!**********************************************************!*\
  !*** ./node_modules/@pnp/sp/behaviors/request-digest.js ***!
  \**********************************************************/
/*! exports provided: RequestDigest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestDigest", function() { return RequestDigest; });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/extract-web-url.js */ "OXUt");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../operations.js */ "UK2s");





function clearExpired(digest) {
    const now = new Date();
    return !Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["objectDefinedNotNull"])(digest) || (now > digest.expiration) ? null : digest;
}
// allows for the caching of digests across all calls which each have their own IDigestInfo wrapper.
const digests = new Map();
function RequestDigest(hook) {
    return (instance) => {
        instance.on.pre(async function (url, init, result) {
            // add the request to the auth moment of the timeline
            this.on.auth(async (url, init) => {
                // eslint-disable-next-line max-len
                if (/get/i.test(init.method) || (init.headers && (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["hOP"])(init.headers, "X-RequestDigest") || Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["hOP"])(init.headers, "Authorization") || Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["hOP"])(init.headers, "X-PnPjs-NoDigest")))) {
                    return [url, init];
                }
                const urlAsString = url.toString();
                const webUrl = Object(_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_2__["extractWebUrl"])(urlAsString);
                // do we have one in the cache that is still valid
                // from #2186 we need to always ensure the digest we get isn't expired
                let digest = clearExpired(digests.get(webUrl));
                if (!Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["objectDefinedNotNull"])(digest) && Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["isFunc"])(hook)) {
                    digest = clearExpired(hook(urlAsString, init));
                }
                if (!Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["objectDefinedNotNull"])(digest)) {
                    digest = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_4__["spPost"])(Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__["SPQueryable"])([this, Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["combine"])(webUrl, "_api/contextinfo")]).using(Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__["JSONParse"])()), {
                        headers: {
                            "X-PnPjs-NoDigest": "1",
                        },
                    }).then(p => ({
                        expiration: Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["dateAdd"])(new Date(), "second", p.FormDigestTimeoutSeconds),
                        value: p.FormDigestValue,
                    }));
                }
                if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["objectDefinedNotNull"])(digest)) {
                    // if we got a digest, set it in the headers
                    init.headers = {
                        "X-RequestDigest": digest.value,
                        ...init.headers,
                    };
                    // and cache it for future requests
                    digests.set(webUrl, digest);
                }
                return [url, init];
            });
            return [url, init, result];
        });
        return instance;
    };
}
//# sourceMappingURL=request-digest.js.map

/***/ }),

/***/ "ISfK":
/*!**********************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/timeout.js ***!
  \**********************************************************/
/*! exports provided: Timeout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timeout", function() { return Timeout; });
/**
 * Behavior that will cause a timeout in the request after the specified milliseconds
 *
 * @param timeout Number of milliseconds to set the timeout
 */
function Timeout(timeout) {
    return (instance) => {
        instance.on.pre(async (url, init, result) => {
            const controller = new AbortController();
            init.signal = controller.signal;
            setTimeout(() => controller.abort(), timeout);
            return [url, init, result];
        });
        return instance;
    };
}
//# sourceMappingURL=timeout.js.map

/***/ }),

/***/ "IrXD":
/*!**********************************************************!*\
  !*** ./node_modules/@tweenjs/tween.js/dist/tween.esm.js ***!
  \**********************************************************/
/*! exports provided: default, Easing, Group, Interpolation, Sequence, Tween, VERSION, add, getAll, nextId, now, remove, removeAll, update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Easing", function() { return Easing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interpolation", function() { return Interpolation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sequence", function() { return Sequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tween", function() { return Tween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAll", function() { return getAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextId", function() { return nextId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAll", function() { return removeAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/**
 * The Ease class provides a collection of easing functions for use with tween.js.
 */
var Easing = {
    Linear: {
        None: function (amount) {
            return amount;
        },
    },
    Quadratic: {
        In: function (amount) {
            return amount * amount;
        },
        Out: function (amount) {
            return amount * (2 - amount);
        },
        InOut: function (amount) {
            if ((amount *= 2) < 1) {
                return 0.5 * amount * amount;
            }
            return -0.5 * (--amount * (amount - 2) - 1);
        },
    },
    Cubic: {
        In: function (amount) {
            return amount * amount * amount;
        },
        Out: function (amount) {
            return --amount * amount * amount + 1;
        },
        InOut: function (amount) {
            if ((amount *= 2) < 1) {
                return 0.5 * amount * amount * amount;
            }
            return 0.5 * ((amount -= 2) * amount * amount + 2);
        },
    },
    Quartic: {
        In: function (amount) {
            return amount * amount * amount * amount;
        },
        Out: function (amount) {
            return 1 - --amount * amount * amount * amount;
        },
        InOut: function (amount) {
            if ((amount *= 2) < 1) {
                return 0.5 * amount * amount * amount * amount;
            }
            return -0.5 * ((amount -= 2) * amount * amount * amount - 2);
        },
    },
    Quintic: {
        In: function (amount) {
            return amount * amount * amount * amount * amount;
        },
        Out: function (amount) {
            return --amount * amount * amount * amount * amount + 1;
        },
        InOut: function (amount) {
            if ((amount *= 2) < 1) {
                return 0.5 * amount * amount * amount * amount * amount;
            }
            return 0.5 * ((amount -= 2) * amount * amount * amount * amount + 2);
        },
    },
    Sinusoidal: {
        In: function (amount) {
            return 1 - Math.cos((amount * Math.PI) / 2);
        },
        Out: function (amount) {
            return Math.sin((amount * Math.PI) / 2);
        },
        InOut: function (amount) {
            return 0.5 * (1 - Math.cos(Math.PI * amount));
        },
    },
    Exponential: {
        In: function (amount) {
            return amount === 0 ? 0 : Math.pow(1024, amount - 1);
        },
        Out: function (amount) {
            return amount === 1 ? 1 : 1 - Math.pow(2, -10 * amount);
        },
        InOut: function (amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            if ((amount *= 2) < 1) {
                return 0.5 * Math.pow(1024, amount - 1);
            }
            return 0.5 * (-Math.pow(2, -10 * (amount - 1)) + 2);
        },
    },
    Circular: {
        In: function (amount) {
            return 1 - Math.sqrt(1 - amount * amount);
        },
        Out: function (amount) {
            return Math.sqrt(1 - --amount * amount);
        },
        InOut: function (amount) {
            if ((amount *= 2) < 1) {
                return -0.5 * (Math.sqrt(1 - amount * amount) - 1);
            }
            return 0.5 * (Math.sqrt(1 - (amount -= 2) * amount) + 1);
        },
    },
    Elastic: {
        In: function (amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            return -Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
        },
        Out: function (amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            return Math.pow(2, -10 * amount) * Math.sin((amount - 0.1) * 5 * Math.PI) + 1;
        },
        InOut: function (amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            amount *= 2;
            if (amount < 1) {
                return -0.5 * Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
            }
            return 0.5 * Math.pow(2, -10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI) + 1;
        },
    },
    Back: {
        In: function (amount) {
            var s = 1.70158;
            return amount * amount * ((s + 1) * amount - s);
        },
        Out: function (amount) {
            var s = 1.70158;
            return --amount * amount * ((s + 1) * amount + s) + 1;
        },
        InOut: function (amount) {
            var s = 1.70158 * 1.525;
            if ((amount *= 2) < 1) {
                return 0.5 * (amount * amount * ((s + 1) * amount - s));
            }
            return 0.5 * ((amount -= 2) * amount * ((s + 1) * amount + s) + 2);
        },
    },
    Bounce: {
        In: function (amount) {
            return 1 - Easing.Bounce.Out(1 - amount);
        },
        Out: function (amount) {
            if (amount < 1 / 2.75) {
                return 7.5625 * amount * amount;
            }
            else if (amount < 2 / 2.75) {
                return 7.5625 * (amount -= 1.5 / 2.75) * amount + 0.75;
            }
            else if (amount < 2.5 / 2.75) {
                return 7.5625 * (amount -= 2.25 / 2.75) * amount + 0.9375;
            }
            else {
                return 7.5625 * (amount -= 2.625 / 2.75) * amount + 0.984375;
            }
        },
        InOut: function (amount) {
            if (amount < 0.5) {
                return Easing.Bounce.In(amount * 2) * 0.5;
            }
            return Easing.Bounce.Out(amount * 2 - 1) * 0.5 + 0.5;
        },
    },
};

var now;
// Include a performance.now polyfill.
// In node.js, use process.hrtime.
// eslint-disable-next-line
// @ts-ignore
if (typeof self === 'undefined' && typeof process !== 'undefined' && process.hrtime) {
    now = function () {
        // eslint-disable-next-line
        // @ts-ignore
        var time = process.hrtime();
        // Convert [seconds, nanoseconds] to milliseconds.
        return time[0] * 1000 + time[1] / 1000000;
    };
}
// In a browser, use self.performance.now if it is available.
else if (typeof self !== 'undefined' && self.performance !== undefined && self.performance.now !== undefined) {
    // This must be bound, because directly assigning this function
    // leads to an invocation exception in Chrome.
    now = self.performance.now.bind(self.performance);
}
// Use Date.now if it is available.
else if (Date.now !== undefined) {
    now = Date.now;
}
// Otherwise, use 'new Date().getTime()'.
else {
    now = function () {
        return new Date().getTime();
    };
}
var now$1 = now;

/**
 * Controlling groups of tweens
 *
 * Using the TWEEN singleton to manage your tweens can cause issues in large apps with many components.
 * In these cases, you may want to create your own smaller groups of tween
 */
var Group = /** @class */ (function () {
    function Group() {
        this._tweens = {};
        this._tweensAddedDuringUpdate = {};
    }
    Group.prototype.getAll = function () {
        var _this = this;
        return Object.keys(this._tweens).map(function (tweenId) {
            return _this._tweens[tweenId];
        });
    };
    Group.prototype.removeAll = function () {
        this._tweens = {};
    };
    Group.prototype.add = function (tween) {
        this._tweens[tween.getId()] = tween;
        this._tweensAddedDuringUpdate[tween.getId()] = tween;
    };
    Group.prototype.remove = function (tween) {
        delete this._tweens[tween.getId()];
        delete this._tweensAddedDuringUpdate[tween.getId()];
    };
    Group.prototype.update = function (time, preserve) {
        if (time === void 0) { time = now$1(); }
        if (preserve === void 0) { preserve = false; }
        var tweenIds = Object.keys(this._tweens);
        if (tweenIds.length === 0) {
            return false;
        }
        // Tweens are updated in "batches". If you add a new tween during an
        // update, then the new tween will be updated in the next batch.
        // If you remove a tween during an update, it may or may not be updated.
        // However, if the removed tween was added during the current batch,
        // then it will not be updated.
        while (tweenIds.length > 0) {
            this._tweensAddedDuringUpdate = {};
            for (var i = 0; i < tweenIds.length; i++) {
                var tween = this._tweens[tweenIds[i]];
                var autoStart = !preserve;
                if (tween && tween.update(time, autoStart) === false && !preserve) {
                    delete this._tweens[tweenIds[i]];
                }
            }
            tweenIds = Object.keys(this._tweensAddedDuringUpdate);
        }
        return true;
    };
    return Group;
}());

/**
 *
 */
var Interpolation = {
    Linear: function (v, k) {
        var m = v.length - 1;
        var f = m * k;
        var i = Math.floor(f);
        var fn = Interpolation.Utils.Linear;
        if (k < 0) {
            return fn(v[0], v[1], f);
        }
        if (k > 1) {
            return fn(v[m], v[m - 1], m - f);
        }
        return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
    },
    Bezier: function (v, k) {
        var b = 0;
        var n = v.length - 1;
        var pw = Math.pow;
        var bn = Interpolation.Utils.Bernstein;
        for (var i = 0; i <= n; i++) {
            b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
        }
        return b;
    },
    CatmullRom: function (v, k) {
        var m = v.length - 1;
        var f = m * k;
        var i = Math.floor(f);
        var fn = Interpolation.Utils.CatmullRom;
        if (v[0] === v[m]) {
            if (k < 0) {
                i = Math.floor((f = m * (1 + k)));
            }
            return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
        }
        else {
            if (k < 0) {
                return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
            }
            if (k > 1) {
                return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
            }
            return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
        }
    },
    Utils: {
        Linear: function (p0, p1, t) {
            return (p1 - p0) * t + p0;
        },
        Bernstein: function (n, i) {
            var fc = Interpolation.Utils.Factorial;
            return fc(n) / fc(i) / fc(n - i);
        },
        Factorial: (function () {
            var a = [1];
            return function (n) {
                var s = 1;
                if (a[n]) {
                    return a[n];
                }
                for (var i = n; i > 1; i--) {
                    s *= i;
                }
                a[n] = s;
                return s;
            };
        })(),
        CatmullRom: function (p0, p1, p2, p3, t) {
            var v0 = (p2 - p0) * 0.5;
            var v1 = (p3 - p1) * 0.5;
            var t2 = t * t;
            var t3 = t * t2;
            return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
        },
    },
};

/**
 * Utils
 */
var Sequence = /** @class */ (function () {
    function Sequence() {
    }
    Sequence.nextId = function () {
        return Sequence._nextId++;
    };
    Sequence._nextId = 0;
    return Sequence;
}());

var mainGroup = new Group();

/**
 * Tween.js - Licensed under the MIT license
 * https://github.com/tweenjs/tween.js
 * ----------------------------------------------
 *
 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
 * Thank you all, you're awesome!
 */
var Tween = /** @class */ (function () {
    function Tween(_object, _group) {
        if (_group === void 0) { _group = mainGroup; }
        this._object = _object;
        this._group = _group;
        this._isPaused = false;
        this._pauseStart = 0;
        this._valuesStart = {};
        this._valuesEnd = {};
        this._valuesStartRepeat = {};
        this._duration = 1000;
        this._initialRepeat = 0;
        this._repeat = 0;
        this._yoyo = false;
        this._isPlaying = false;
        this._reversed = false;
        this._delayTime = 0;
        this._startTime = 0;
        this._easingFunction = Easing.Linear.None;
        this._interpolationFunction = Interpolation.Linear;
        this._chainedTweens = [];
        this._onStartCallbackFired = false;
        this._id = Sequence.nextId();
        this._isChainStopped = false;
        this._goToEnd = false;
    }
    Tween.prototype.getId = function () {
        return this._id;
    };
    Tween.prototype.isPlaying = function () {
        return this._isPlaying;
    };
    Tween.prototype.isPaused = function () {
        return this._isPaused;
    };
    Tween.prototype.to = function (properties, duration) {
        // TODO? restore this, then update the 07_dynamic_to example to set fox
        // tween's to on each update. That way the behavior is opt-in (there's
        // currently no opt-out).
        // for (const prop in properties) this._valuesEnd[prop] = properties[prop]
        this._valuesEnd = Object.create(properties);
        if (duration !== undefined) {
            this._duration = duration;
        }
        return this;
    };
    Tween.prototype.duration = function (d) {
        this._duration = d;
        return this;
    };
    Tween.prototype.start = function (time) {
        if (this._isPlaying) {
            return this;
        }
        // eslint-disable-next-line
        this._group && this._group.add(this);
        this._repeat = this._initialRepeat;
        if (this._reversed) {
            // If we were reversed (f.e. using the yoyo feature) then we need to
            // flip the tween direction back to forward.
            this._reversed = false;
            for (var property in this._valuesStartRepeat) {
                this._swapEndStartRepeatValues(property);
                this._valuesStart[property] = this._valuesStartRepeat[property];
            }
        }
        this._isPlaying = true;
        this._isPaused = false;
        this._onStartCallbackFired = false;
        this._isChainStopped = false;
        this._startTime = time !== undefined ? (typeof time === 'string' ? now$1() + parseFloat(time) : time) : now$1();
        this._startTime += this._delayTime;
        this._setupProperties(this._object, this._valuesStart, this._valuesEnd, this._valuesStartRepeat);
        return this;
    };
    Tween.prototype._setupProperties = function (_object, _valuesStart, _valuesEnd, _valuesStartRepeat) {
        for (var property in _valuesEnd) {
            var startValue = _object[property];
            var startValueIsArray = Array.isArray(startValue);
            var propType = startValueIsArray ? 'array' : typeof startValue;
            var isInterpolationList = !startValueIsArray && Array.isArray(_valuesEnd[property]);
            // If `to()` specifies a property that doesn't exist in the source object,
            // we should not set that property in the object
            if (propType === 'undefined' || propType === 'function') {
                continue;
            }
            // Check if an Array was provided as property value
            if (isInterpolationList) {
                var endValues = _valuesEnd[property];
                if (endValues.length === 0) {
                    continue;
                }
                // handle an array of relative values
                endValues = endValues.map(this._handleRelativeValue.bind(this, startValue));
                // Create a local copy of the Array with the start value at the front
                _valuesEnd[property] = [startValue].concat(endValues);
            }
            // handle the deepness of the values
            if ((propType === 'object' || startValueIsArray) && startValue && !isInterpolationList) {
                _valuesStart[property] = startValueIsArray ? [] : {};
                // eslint-disable-next-line
                for (var prop in startValue) {
                    // eslint-disable-next-line
                    // @ts-ignore FIXME?
                    _valuesStart[property][prop] = startValue[prop];
                }
                _valuesStartRepeat[property] = startValueIsArray ? [] : {}; // TODO? repeat nested values? And yoyo? And array values?
                // eslint-disable-next-line
                // @ts-ignore FIXME?
                this._setupProperties(startValue, _valuesStart[property], _valuesEnd[property], _valuesStartRepeat[property]);
            }
            else {
                // Save the starting value, but only once.
                if (typeof _valuesStart[property] === 'undefined') {
                    _valuesStart[property] = startValue;
                }
                if (!startValueIsArray) {
                    // eslint-disable-next-line
                    // @ts-ignore FIXME?
                    _valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
                }
                if (isInterpolationList) {
                    // eslint-disable-next-line
                    // @ts-ignore FIXME?
                    _valuesStartRepeat[property] = _valuesEnd[property].slice().reverse();
                }
                else {
                    _valuesStartRepeat[property] = _valuesStart[property] || 0;
                }
            }
        }
    };
    Tween.prototype.stop = function () {
        if (!this._isChainStopped) {
            this._isChainStopped = true;
            this.stopChainedTweens();
        }
        if (!this._isPlaying) {
            return this;
        }
        // eslint-disable-next-line
        this._group && this._group.remove(this);
        this._isPlaying = false;
        this._isPaused = false;
        if (this._onStopCallback) {
            this._onStopCallback(this._object);
        }
        return this;
    };
    Tween.prototype.end = function () {
        this._goToEnd = true;
        this.update(Infinity);
        return this;
    };
    Tween.prototype.pause = function (time) {
        if (time === void 0) { time = now$1(); }
        if (this._isPaused || !this._isPlaying) {
            return this;
        }
        this._isPaused = true;
        this._pauseStart = time;
        // eslint-disable-next-line
        this._group && this._group.remove(this);
        return this;
    };
    Tween.prototype.resume = function (time) {
        if (time === void 0) { time = now$1(); }
        if (!this._isPaused || !this._isPlaying) {
            return this;
        }
        this._isPaused = false;
        this._startTime += time - this._pauseStart;
        this._pauseStart = 0;
        // eslint-disable-next-line
        this._group && this._group.add(this);
        return this;
    };
    Tween.prototype.stopChainedTweens = function () {
        for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
            this._chainedTweens[i].stop();
        }
        return this;
    };
    Tween.prototype.group = function (group) {
        this._group = group;
        return this;
    };
    Tween.prototype.delay = function (amount) {
        this._delayTime = amount;
        return this;
    };
    Tween.prototype.repeat = function (times) {
        this._initialRepeat = times;
        this._repeat = times;
        return this;
    };
    Tween.prototype.repeatDelay = function (amount) {
        this._repeatDelayTime = amount;
        return this;
    };
    Tween.prototype.yoyo = function (yoyo) {
        this._yoyo = yoyo;
        return this;
    };
    Tween.prototype.easing = function (easingFunction) {
        this._easingFunction = easingFunction;
        return this;
    };
    Tween.prototype.interpolation = function (interpolationFunction) {
        this._interpolationFunction = interpolationFunction;
        return this;
    };
    Tween.prototype.chain = function () {
        var tweens = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            tweens[_i] = arguments[_i];
        }
        this._chainedTweens = tweens;
        return this;
    };
    Tween.prototype.onStart = function (callback) {
        this._onStartCallback = callback;
        return this;
    };
    Tween.prototype.onUpdate = function (callback) {
        this._onUpdateCallback = callback;
        return this;
    };
    Tween.prototype.onRepeat = function (callback) {
        this._onRepeatCallback = callback;
        return this;
    };
    Tween.prototype.onComplete = function (callback) {
        this._onCompleteCallback = callback;
        return this;
    };
    Tween.prototype.onStop = function (callback) {
        this._onStopCallback = callback;
        return this;
    };
    /**
     * @returns true if the tween is still playing after the update, false
     * otherwise (calling update on a paused tween still returns true because
     * it is still playing, just paused).
     */
    Tween.prototype.update = function (time, autoStart) {
        if (time === void 0) { time = now$1(); }
        if (autoStart === void 0) { autoStart = true; }
        if (this._isPaused)
            return true;
        var property;
        var elapsed;
        var endTime = this._startTime + this._duration;
        if (!this._goToEnd && !this._isPlaying) {
            if (time > endTime)
                return false;
            if (autoStart)
                this.start(time);
        }
        this._goToEnd = false;
        if (time < this._startTime) {
            return true;
        }
        if (this._onStartCallbackFired === false) {
            if (this._onStartCallback) {
                this._onStartCallback(this._object);
            }
            this._onStartCallbackFired = true;
        }
        elapsed = (time - this._startTime) / this._duration;
        elapsed = this._duration === 0 || elapsed > 1 ? 1 : elapsed;
        var value = this._easingFunction(elapsed);
        // properties transformations
        this._updateProperties(this._object, this._valuesStart, this._valuesEnd, value);
        if (this._onUpdateCallback) {
            this._onUpdateCallback(this._object, elapsed);
        }
        if (elapsed === 1) {
            if (this._repeat > 0) {
                if (isFinite(this._repeat)) {
                    this._repeat--;
                }
                // Reassign starting values, restart by making startTime = now
                for (property in this._valuesStartRepeat) {
                    if (!this._yoyo && typeof this._valuesEnd[property] === 'string') {
                        this._valuesStartRepeat[property] =
                            // eslint-disable-next-line
                            // @ts-ignore FIXME?
                            this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
                    }
                    if (this._yoyo) {
                        this._swapEndStartRepeatValues(property);
                    }
                    this._valuesStart[property] = this._valuesStartRepeat[property];
                }
                if (this._yoyo) {
                    this._reversed = !this._reversed;
                }
                if (this._repeatDelayTime !== undefined) {
                    this._startTime = time + this._repeatDelayTime;
                }
                else {
                    this._startTime = time + this._delayTime;
                }
                if (this._onRepeatCallback) {
                    this._onRepeatCallback(this._object);
                }
                return true;
            }
            else {
                if (this._onCompleteCallback) {
                    this._onCompleteCallback(this._object);
                }
                for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
                    // Make the chained tweens start exactly at the time they should,
                    // even if the `update()` method was called way past the duration of the tween
                    this._chainedTweens[i].start(this._startTime + this._duration);
                }
                this._isPlaying = false;
                return false;
            }
        }
        return true;
    };
    Tween.prototype._updateProperties = function (_object, _valuesStart, _valuesEnd, value) {
        for (var property in _valuesEnd) {
            // Don't update properties that do not exist in the source object
            if (_valuesStart[property] === undefined) {
                continue;
            }
            var start = _valuesStart[property] || 0;
            var end = _valuesEnd[property];
            var startIsArray = Array.isArray(_object[property]);
            var endIsArray = Array.isArray(end);
            var isInterpolationList = !startIsArray && endIsArray;
            if (isInterpolationList) {
                _object[property] = this._interpolationFunction(end, value);
            }
            else if (typeof end === 'object' && end) {
                // eslint-disable-next-line
                // @ts-ignore FIXME?
                this._updateProperties(_object[property], start, end, value);
            }
            else {
                // Parses relative end values with start as base (e.g.: +10, -3)
                end = this._handleRelativeValue(start, end);
                // Protect against non numeric properties.
                if (typeof end === 'number') {
                    // eslint-disable-next-line
                    // @ts-ignore FIXME?
                    _object[property] = start + (end - start) * value;
                }
            }
        }
    };
    Tween.prototype._handleRelativeValue = function (start, end) {
        if (typeof end !== 'string') {
            return end;
        }
        if (end.charAt(0) === '+' || end.charAt(0) === '-') {
            return start + parseFloat(end);
        }
        else {
            return parseFloat(end);
        }
    };
    Tween.prototype._swapEndStartRepeatValues = function (property) {
        var tmp = this._valuesStartRepeat[property];
        var endValue = this._valuesEnd[property];
        if (typeof endValue === 'string') {
            this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(endValue);
        }
        else {
            this._valuesStartRepeat[property] = this._valuesEnd[property];
        }
        this._valuesEnd[property] = tmp;
    };
    return Tween;
}());

var VERSION = '18.6.4';

/**
 * Tween.js - Licensed under the MIT license
 * https://github.com/tweenjs/tween.js
 * ----------------------------------------------
 *
 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
 * Thank you all, you're awesome!
 */
var nextId = Sequence.nextId;
/**
 * Controlling groups of tweens
 *
 * Using the TWEEN singleton to manage your tweens can cause issues in large apps with many components.
 * In these cases, you may want to create your own smaller groups of tweens.
 */
var TWEEN = mainGroup;
// This is the best way to export things in a way that's compatible with both ES
// Modules and CommonJS, without build hacks, and so as not to break the
// existing API.
// https://github.com/rollup/rollup/issues/1961#issuecomment-423037881
var getAll = TWEEN.getAll.bind(TWEEN);
var removeAll = TWEEN.removeAll.bind(TWEEN);
var add = TWEEN.add.bind(TWEEN);
var remove = TWEEN.remove.bind(TWEEN);
var update = TWEEN.update.bind(TWEEN);
var exports = {
    Easing: Easing,
    Group: Group,
    Interpolation: Interpolation,
    now: now$1,
    Sequence: Sequence,
    nextId: nextId,
    Tween: Tween,
    VERSION: VERSION,
    getAll: getAll,
    removeAll: removeAll,
    add: add,
    remove: remove,
    update: update,
};

/* harmony default export */ __webpack_exports__["default"] = (exports);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "8oxB")))

/***/ }),

/***/ "IwJs":
/*!*********************************************************************!*\
  !*** ./node_modules/@pnp/queryable/node_modules/tslib/tslib.es6.js ***!
  \*********************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArray", function() { return __spreadArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldIn", function() { return __classPrivateFieldIn; });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}


/***/ }),

/***/ "J7sA":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/lists/index.js ***!
  \*********************************************/
/*! exports provided: List, Lists, ControlMode, RenderListDataOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web.js */ "Bwa7");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "hy0S");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "List", function() { return _types_js__WEBPACK_IMPORTED_MODULE_1__["List"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lists", function() { return _types_js__WEBPACK_IMPORTED_MODULE_1__["Lists"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlMode", function() { return _types_js__WEBPACK_IMPORTED_MODULE_1__["ControlMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderListDataOptions", function() { return _types_js__WEBPACK_IMPORTED_MODULE_1__["RenderListDataOptions"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "JC1J":
/*!*****************************************!*\
  !*** ./node_modules/@pnp/core/index.js ***!
  \*****************************************/
/*! exports provided: PnPClientStorageWrapper, PnPClientStorage, dateAdd, combine, getRandomString, getGUID, isFunc, isArray, isUrlAbsolute, stringIsNullOrEmpty, objectDefinedNotNull, jsS, hOP, getHashCode, delay, broadcast, asyncBroadcast, reduce, asyncReduce, request, lifecycle, noInherit, once, Timeline, cloneObserverCollection, extendable, extend, extendFactory, disableExtensions, enableExtensions, AssignFrom, CopyFrom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "L2F+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PnPClientStorageWrapper", function() { return _storage_js__WEBPACK_IMPORTED_MODULE_0__["PnPClientStorageWrapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PnPClientStorage", function() { return _storage_js__WEBPACK_IMPORTED_MODULE_0__["PnPClientStorage"]; });

/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ "NuLX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dateAdd", function() { return _util_js__WEBPACK_IMPORTED_MODULE_1__["dateAdd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combine", function() { return _util_js__WEBPACK_IMPORTED_MODULE_1__["combine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRandomString", function() { return _util_js__WEBPACK_IMPORTED_MODULE_1__["getRandomString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGUID", function() { return _util_js__WEBPACK_IMPORTED_MODULE_1__["getGUID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunc", function() { return _util_js__WEBPACK_IMPORTED_MODULE_1__["isFunc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _util_js__WEBPACK_IMPORTED_MODULE_1__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUrlAbsolute", function() { return _util_js__WEBPACK_IMPORTED_MODULE_1__["isUrlAbsolute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringIsNullOrEmpty", function() { return _util_js__WEBPACK_IMPORTED_MODULE_1__["stringIsNullOrEmpty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "objectDefinedNotNull", function() { return _util_js__WEBPACK_IMPORTED_MODULE_1__["objectDefinedNotNull"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jsS", function() { return _util_js__WEBPACK_IMPORTED_MODULE_1__["jsS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hOP", function() { return _util_js__WEBPACK_IMPORTED_MODULE_1__["hOP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHashCode", function() { return _util_js__WEBPACK_IMPORTED_MODULE_1__["getHashCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return _util_js__WEBPACK_IMPORTED_MODULE_1__["delay"]; });

/* harmony import */ var _moments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moments.js */ "DZog");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "broadcast", function() { return _moments_js__WEBPACK_IMPORTED_MODULE_2__["broadcast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asyncBroadcast", function() { return _moments_js__WEBPACK_IMPORTED_MODULE_2__["asyncBroadcast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return _moments_js__WEBPACK_IMPORTED_MODULE_2__["reduce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asyncReduce", function() { return _moments_js__WEBPACK_IMPORTED_MODULE_2__["asyncReduce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "request", function() { return _moments_js__WEBPACK_IMPORTED_MODULE_2__["request"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lifecycle", function() { return _moments_js__WEBPACK_IMPORTED_MODULE_2__["lifecycle"]; });

/* harmony import */ var _timeline_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeline.js */ "4kGv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noInherit", function() { return _timeline_js__WEBPACK_IMPORTED_MODULE_3__["noInherit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "once", function() { return _timeline_js__WEBPACK_IMPORTED_MODULE_3__["once"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Timeline", function() { return _timeline_js__WEBPACK_IMPORTED_MODULE_3__["Timeline"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloneObserverCollection", function() { return _timeline_js__WEBPACK_IMPORTED_MODULE_3__["cloneObserverCollection"]; });

/* harmony import */ var _extendable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extendable.js */ "t9SU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendable", function() { return _extendable_js__WEBPACK_IMPORTED_MODULE_4__["extendable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return _extendable_js__WEBPACK_IMPORTED_MODULE_4__["extend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendFactory", function() { return _extendable_js__WEBPACK_IMPORTED_MODULE_4__["extendFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disableExtensions", function() { return _extendable_js__WEBPACK_IMPORTED_MODULE_4__["disableExtensions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableExtensions", function() { return _extendable_js__WEBPACK_IMPORTED_MODULE_4__["enableExtensions"]; });

/* harmony import */ var _behaviors_assign_from_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./behaviors/assign-from.js */ "zhiF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AssignFrom", function() { return _behaviors_assign_from_js__WEBPACK_IMPORTED_MODULE_5__["AssignFrom"]; });

/* harmony import */ var _behaviors_copy_from_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./behaviors/copy-from.js */ "qNel");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CopyFrom", function() { return _behaviors_copy_from_js__WEBPACK_IMPORTED_MODULE_6__["CopyFrom"]; });






/**
 * Behavior exports
 */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "JEPe":
/*!****************************************************************************!*\
  !*** ./lib/webparts/masterPageRow2/components/ImageSlider/ImageSlider.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../node_modules/@microsoft/spfx-heft-plugins/node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/src??postcss!./ImageSlider.css */ "LQOV");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js */ "ruv1");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "JMvT":
/*!******************************************************************************!*\
  !*** ./lib/webparts/masterPageRow2/components/QuickLinks/QuickLinks.scss.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./QuickLinks.css */ "rv7W");
var styles = {};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "Ji9F":
/*!****************************************************!*\
  !*** ./node_modules/@pnp/sp/context-info/index.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operations.js */ "UK2s");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/extract-web-url.js */ "OXUt");




_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__["_SPQueryable"].prototype.getContextInfo = async function (path = this.parentUrl) {
    const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_1__["spPost"])(Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__["SPQueryable"])([this, Object(_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_3__["extractWebUrl"])(path)], "_api/contextinfo"));
    if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["hOP"])(data, "GetContextWebInformation")) {
        const info = data.GetContextWebInformation;
        info.SupportedSchemaVersions = info.SupportedSchemaVersions.results;
        return info;
    }
    else {
        return data;
    }
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "Ku5p":
/*!***************************************************!*\
  !*** ./node_modules/@pnp/sp/sputilities/index.js ***!
  \***************************************************/
/*! exports provided: Utilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fi.js */ "v6VW");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "AfLD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Utilities", function() { return _types_js__WEBPACK_IMPORTED_MODULE_1__["Utilities"]; });




Reflect.defineProperty(_fi_js__WEBPACK_IMPORTED_MODULE_0__["SPFI"].prototype, "utility", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.create(_types_js__WEBPACK_IMPORTED_MODULE_1__["Utilities"], "");
    },
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "L2F+":
/*!*******************************************!*\
  !*** ./node_modules/@pnp/core/storage.js ***!
  \*******************************************/
/*! exports provided: PnPClientStorageWrapper, PnPClientStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PnPClientStorageWrapper", function() { return PnPClientStorageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PnPClientStorage", function() { return PnPClientStorage; });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "NuLX");

let storageShim;
function getStorageShim() {
    if (typeof storageShim === "undefined") {
        storageShim = new MemoryStorage();
    }
    return storageShim;
}
/**
 * A wrapper class to provide a consistent interface to browser based storage
 *
 */
class PnPClientStorageWrapper {
    /**
     * Creates a new instance of the PnPClientStorageWrapper class
     *
     * @constructor
     */
    constructor(store) {
        this.store = store;
        this.enabled = this.test();
    }
    /**
     * Get a value from storage, or null if that value does not exist
     *
     * @param key The key whose value we want to retrieve
     */
    get(key) {
        if (!this.enabled) {
            return null;
        }
        const o = this.store.getItem(key);
        if (!Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["objectDefinedNotNull"])(o)) {
            return null;
        }
        const persistable = JSON.parse(o);
        if (new Date(persistable.expiration) <= new Date()) {
            this.delete(key);
            return null;
        }
        else {
            return persistable.value;
        }
    }
    /**
     * Adds a value to the underlying storage
     *
     * @param key The key to use when storing the provided value
     * @param o The value to store
     * @param expire Optional, if provided the expiration of the item, otherwise the default is used
     */
    put(key, o, expire) {
        if (this.enabled) {
            this.store.setItem(key, this.createPersistable(o, expire));
        }
    }
    /**
     * Deletes a value from the underlying storage
     *
     * @param key The key of the pair we want to remove from storage
     */
    delete(key) {
        if (this.enabled) {
            this.store.removeItem(key);
        }
    }
    /**
     * Gets an item from the underlying storage, or adds it if it does not exist using the supplied getter function
     *
     * @param key The key to use when storing the provided value
     * @param getter A function which will upon execution provide the desired value
     * @param expire Optional, if provided the expiration of the item, otherwise the default is used
     */
    async getOrPut(key, getter, expire) {
        if (!this.enabled) {
            return getter();
        }
        let o = this.get(key);
        if (o === null) {
            o = await getter();
            this.put(key, o, expire);
        }
        return o;
    }
    /**
     * Deletes any expired items placed in the store by the pnp library, leaves other items untouched
     */
    async deleteExpired() {
        if (!this.enabled) {
            return;
        }
        for (let i = 0; i < this.store.length; i++) {
            const key = this.store.key(i);
            if (key !== null) {
                // test the stored item to see if we stored it
                if (/["|']?pnp["|']? ?: ?1/i.test(this.store.getItem(key))) {
                    // get those items as get will delete from cache if they are expired
                    await this.get(key);
                }
            }
        }
    }
    /**
     * Used to determine if the wrapped storage is available currently
     */
    test() {
        const str = "t";
        try {
            this.store.setItem(str, str);
            this.store.removeItem(str);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    /**
     * Creates the persistable to store
     */
    createPersistable(o, expire) {
        if (expire === undefined) {
            expire = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["dateAdd"])(new Date(), "minute", 5);
        }
        return Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["jsS"])({ pnp: 1, expiration: expire, value: o });
    }
}
/**
 * A thin implementation of in-memory storage for use in nodejs
 */
class MemoryStorage {
    constructor(_store = new Map()) {
        this._store = _store;
    }
    get length() {
        return this._store.size;
    }
    clear() {
        this._store.clear();
    }
    getItem(key) {
        return this._store.get(key);
    }
    key(index) {
        return Array.from(this._store)[index][0];
    }
    removeItem(key) {
        this._store.delete(key);
    }
    setItem(key, data) {
        this._store.set(key, data);
    }
}
/**
 * A class that will establish wrappers for both local and session storage, substituting basic memory storage for nodejs
 */
class PnPClientStorage {
    /**
     * Creates a new instance of the PnPClientStorage class
     *
     * @constructor
     */
    constructor(_local = null, _session = null) {
        this._local = _local;
        this._session = _session;
    }
    /**
     * Provides access to the local storage of the browser
     */
    get local() {
        if (this._local === null) {
            this._local = new PnPClientStorageWrapper(typeof localStorage === "undefined" ? getStorageShim() : localStorage);
        }
        return this._local;
    }
    /**
     * Provides access to the session storage of the browser
     */
    get session() {
        if (this._session === null) {
            this._session = new PnPClientStorageWrapper(typeof sessionStorage === "undefined" ? getStorageShim() : sessionStorage);
        }
        return this._session;
    }
}
//# sourceMappingURL=storage.js.map

/***/ }),

/***/ "LQOV":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@microsoft/spfx-heft-plugins/node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./lib/webparts/masterPageRow2/components/ImageSlider/ImageSlider.css ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/@microsoft/spfx-heft-plugins/node_modules/css-loader/dist/runtime/api.js */ "Z+AG")(false);
// Module
exports.push([module.i, ".each-slide-effect>div{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-size:cover;height:350px}.each-slide-effect span{padding:20px;font-size:20px;background:#efefef;text-align:center}.each-slide img{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-size:cover;height:250px;width:100%}", ""]);


/***/ }),

/***/ "LVfT":
/*!**************************************************************!*\
  !*** ./node_modules/@pnp/sp/node_modules/tslib/tslib.es6.js ***!
  \**************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArray", function() { return __spreadArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldIn", function() { return __classPrivateFieldIn; });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}


/***/ }),

/***/ "LZ64":
/*!**********************************************!*\
  !*** ./node_modules/@pnp/sp/folders/item.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _items_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../items/types.js */ "3DT9");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "4tXH");



Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__["addProp"])(_items_types_js__WEBPACK_IMPORTED_MODULE_1__["_Item"], "folder", _types_js__WEBPACK_IMPORTED_MODULE_2__["Folder"]);
//# sourceMappingURL=item.js.map

/***/ }),

/***/ "MiMR":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@microsoft/spfx-heft-plugins/node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./lib/webparts/masterPageRow2/components/Feedback/Feedback.css ***!
  \*************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/@microsoft/spfx-heft-plugins/node_modules/css-loader/dist/runtime/api.js */ "Z+AG")(false);
// Module
exports.push([module.i, "textarea{margin:5px;resize:none;height:75px;width:98%;background-color:hsla(0,0%,100%,0);border:none;outline:0}.feedbackTitle{padding:3px 12px}.formDiv{position:relative;background-image:url(https://24cl8t.sharepoint.com/sites/Dev/SiteAssets/KaiZan-bg.png);background-size:60%;background-repeat:no-repeat;background-position:50%}.submitBtn{position:absolute;bottom:-18px;right:17px;z-index:999}.submitBtn button{background-color:#5891bb;padding:7px;border:none;cursor:grab;border-radius:2px;font-size:10px}", ""]);


/***/ }),

/***/ "NTTg":
/*!********************************************!*\
  !*** ./node_modules/@pnp/sp/items/list.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _lists_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lists/types.js */ "hy0S");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "3DT9");



Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__["addProp"])(_lists_types_js__WEBPACK_IMPORTED_MODULE_1__["_List"], "items", _types_js__WEBPACK_IMPORTED_MODULE_2__["Items"]);
//# sourceMappingURL=list.js.map

/***/ }),

/***/ "NuLX":
/*!****************************************!*\
  !*** ./node_modules/@pnp/core/util.js ***!
  \****************************************/
/*! exports provided: dateAdd, combine, getRandomString, getGUID, isFunc, isArray, isUrlAbsolute, stringIsNullOrEmpty, objectDefinedNotNull, jsS, hOP, getHashCode, delay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateAdd", function() { return dateAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combine", function() { return combine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomString", function() { return getRandomString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGUID", function() { return getGUID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunc", function() { return isFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUrlAbsolute", function() { return isUrlAbsolute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringIsNullOrEmpty", function() { return stringIsNullOrEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectDefinedNotNull", function() { return objectDefinedNotNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsS", function() { return jsS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hOP", function() { return hOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHashCode", function() { return getHashCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return delay; });
/**
 * Adds a value to a date
 *
 * @param date The date to which we will add units, done in local time
 * @param interval The name of the interval to add, one of: ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second']
 * @param units The amount to add to date of the given interval
 *
 * http://stackoverflow.com/questions/1197928/how-to-add-30-minutes-to-a-javascript-date-object
 */
function dateAdd(date, interval, units) {
    let ret = new Date(date.toString()); // don't change original date
    switch (interval.toLowerCase()) {
        case "year":
            ret.setFullYear(ret.getFullYear() + units);
            break;
        case "quarter":
            ret.setMonth(ret.getMonth() + 3 * units);
            break;
        case "month":
            ret.setMonth(ret.getMonth() + units);
            break;
        case "week":
            ret.setDate(ret.getDate() + 7 * units);
            break;
        case "day":
            ret.setDate(ret.getDate() + units);
            break;
        case "hour":
            ret.setTime(ret.getTime() + units * 3600000);
            break;
        case "minute":
            ret.setTime(ret.getTime() + units * 60000);
            break;
        case "second":
            ret.setTime(ret.getTime() + units * 1000);
            break;
        default:
            ret = undefined;
            break;
    }
    return ret;
}
/**
 * Combines an arbitrary set of paths ensuring and normalizes the slashes
 *
 * @param paths 0 to n path parts to combine
 */
function combine(...paths) {
    return paths
        .filter(path => !stringIsNullOrEmpty(path))
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        .map(path => path.replace(/^[\\|/]/, "").replace(/[\\|/]$/, ""))
        .join("/")
        .replace(/\\/g, "/");
}
/**
 * Gets a random string of chars length
 *
 * https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
 *
 * @param chars The length of the random string to generate
 */
function getRandomString(chars) {
    const text = new Array(chars);
    for (let i = 0; i < chars; i++) {
        text[i] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random() * 62));
    }
    return text.join("");
}
/**
 * Gets a random GUID value
 *
 * http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 */
/* eslint-disable no-bitwise */
function getGUID() {
    let d = Date.now();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
    });
}
/* eslint-enable no-bitwise */
/**
 * Determines if a given value is a function
 *
 * @param f The thing to test for functionness
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function isFunc(f) {
    return typeof f === "function";
}
/**
 * @returns whether the provided parameter is a JavaScript Array or not.
*/
function isArray(array) {
    return Array.isArray(array);
}
/**
 * Determines if a given url is absolute
 *
 * @param url The url to check to see if it is absolute
 */
function isUrlAbsolute(url) {
    return /^https?:\/\/|^\/\//i.test(url);
}
/**
 * Determines if a string is null or empty or undefined
 *
 * @param s The string to test
 */
function stringIsNullOrEmpty(s) {
    return typeof s === "undefined" || s === null || s.length < 1;
}
/**
 * Determines if an object is both defined and not null
 * @param obj Object to test
 */
function objectDefinedNotNull(obj) {
    return typeof obj !== "undefined" && obj !== null;
}
/**
 * Shorthand for JSON.stringify
 *
 * @param o Any type of object
 */
function jsS(o) {
    return JSON.stringify(o);
}
/**
 * Shorthand for Object.hasOwnProperty
 *
 * @param o Object to check for
 * @param p Name of the property
 */
function hOP(o, p) {
    return Object.hasOwnProperty.call(o, p);
}
/**
 * Generates a ~unique hash code
 *
 * From: https://stackoverflow.com/questions/6122571/simple-non-secure-hash-function-for-javascript
 */
/* eslint-disable no-bitwise */
function getHashCode(s) {
    let hash = 0;
    if (s.length === 0) {
        return hash;
    }
    for (let i = 0; i < s.length; i++) {
        const chr = s.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}
/* eslint-enable no-bitwise */
/**
 * Waits a specified number of milliseconds before resolving
 *
 * @param ms Number of ms to wait
 */
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "OWTB":
/*!************************************************!*\
  !*** ./node_modules/@pnp/sp/behaviors/spfx.js ***!
  \************************************************/
/*! exports provided: SPFxToken, SPFx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPFxToken", function() { return SPFxToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPFx", function() { return SPFx; });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaults.js */ "qZw7");
/* harmony import */ var _request_digest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request-digest.js */ "GfGO");




function SPFxToken(context) {
    return (instance) => {
        instance.on.auth.replace(async function (url, init) {
            const provider = await context.aadTokenProviderFactory.getTokenProvider();
            const token = await provider.getToken(`${url.protocol}//${url.hostname}`);
            // eslint-disable-next-line @typescript-eslint/dot-notation
            init.headers["Authorization"] = `Bearer ${token}`;
            return [url, init];
        });
        return instance;
    };
}
function SPFx(context) {
    return (instance) => {
        instance.using(Object(_defaults_js__WEBPACK_IMPORTED_MODULE_2__["DefaultHeaders"])(), Object(_defaults_js__WEBPACK_IMPORTED_MODULE_2__["DefaultInit"])(), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__["BrowserFetchWithRetry"])(), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__["DefaultParse"])(), 
        // remove SPFx Token in default due to issues #2570, #2571
        // SPFxToken(context),
        Object(_request_digest_js__WEBPACK_IMPORTED_MODULE_3__["RequestDigest"])((url) => {
            var _a, _b, _c;
            const sameWeb = (new RegExp(`^${Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["combine"])(context.pageContext.web.absoluteUrl, "/_api")}`, "i")).test(url);
            if (sameWeb && ((_b = (_a = context === null || context === void 0 ? void 0 : context.pageContext) === null || _a === void 0 ? void 0 : _a.legacyPageContext) === null || _b === void 0 ? void 0 : _b.formDigestValue)) {
                const creationDateFromDigest = new Date(context.pageContext.legacyPageContext.formDigestValue.split(",")[1]);
                // account for page lifetime in timeout #2304 & others
                // account for tab sleep #2550
                return {
                    value: context.pageContext.legacyPageContext.formDigestValue,
                    expiration: Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["dateAdd"])(creationDateFromDigest, "second", ((_c = context.pageContext.legacyPageContext) === null || _c === void 0 ? void 0 : _c.formDigestTimeoutSeconds) - 15 || 1585),
                };
            }
        }));
        // we want to fix up the url first
        instance.on.pre.prepend(async (url, init, result) => {
            if (!Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["isUrlAbsolute"])(url)) {
                url = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["combine"])(context.pageContext.web.absoluteUrl, url);
            }
            return [url, init, result];
        });
        return instance;
    };
}
//# sourceMappingURL=spfx.js.map

/***/ }),

/***/ "OXUt":
/*!*******************************************************!*\
  !*** ./node_modules/@pnp/sp/utils/extract-web-url.js ***!
  \*******************************************************/
/*! exports provided: extractWebUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractWebUrl", function() { return extractWebUrl; });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");

function extractWebUrl(candidateUrl) {
    if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["stringIsNullOrEmpty"])(candidateUrl)) {
        return "";
    }
    let index = candidateUrl.indexOf("_api/");
    if (index < 0) {
        index = candidateUrl.indexOf("_vti_bin/");
    }
    if (index > -1) {
        return candidateUrl.substring(0, index);
    }
    // if all else fails just give them what they gave us back
    return candidateUrl;
}
//# sourceMappingURL=extract-web-url.js.map

/***/ }),

/***/ "PNaF":
/*!***********************************************************************!*\
  !*** ./lib/webparts/masterPageRow2/components/MasterPageRow2.scss.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./MasterPageRow2.css */ "uwN9");
var styles = {};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "UK2s":
/*!********************************************!*\
  !*** ./node_modules/@pnp/sp/operations.js ***!
  \********************************************/
/*! exports provided: spGet, spPost, spPostMerge, spPostDelete, spPostDeleteETag, spDelete, spPatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spGet", function() { return spGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spPost", function() { return spPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spPostMerge", function() { return spPostMerge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spPostDelete", function() { return spPostDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spPostDeleteETag", function() { return spPostDeleteETag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spDelete", function() { return spDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spPatch", function() { return spPatch; });
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");

const spGet = (o, init) => {
    return Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__["op"])(o, _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__["get"], init);
};
const spPost = (o, init) => Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__["op"])(o, _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__["post"], init);
const spPostMerge = (o, init) => {
    init = init || {};
    init.headers = { ...init.headers, "X-HTTP-Method": "MERGE" };
    return spPost(o, init);
};
const spPostDelete = (o, init) => {
    init = init || {};
    init.headers = { ...init.headers || {}, "X-HTTP-Method": "DELETE" };
    return spPost(o, init);
};
const spPostDeleteETag = (o, init, eTag = "*") => {
    init = init || {};
    init.headers = { ...init.headers || {}, "IF-Match": eTag };
    return spPostDelete(o, init);
};
const spDelete = (o, init) => Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__["op"])(o, _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__["del"], init);
const spPatch = (o, init) => Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__["op"])(o, _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__["patch"], init);
//# sourceMappingURL=operations.js.map

/***/ }),

/***/ "UKGb":
/*!***************************************!*\
  !*** ./node_modules/@pnp/sp/index.js ***!
  \***************************************/
/*! exports provided: spInvokableFactory, _SPQueryable, SPQueryable, _SPCollection, SPCollection, _SPInstance, SPInstance, deleteable, deleteableWithETag, defaultPath, spGet, spPost, spPostMerge, spPostDelete, spPostDeleteETag, spDelete, spPatch, SPFI, spfi, emptyGuid, PrincipalType, PrincipalSource, PageType, extractWebUrl, containsInvalidFileFolderChars, stripInvalidFileFolderChars, odataUrlFrom, toResourcePath, encodePath, DefaultInit, DefaultHeaders, Telemetry, RequestDigest, SPBrowser, SPFxToken, SPFx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spqueryable.js */ "F4qD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spInvokableFactory", function() { return _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__["spInvokableFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_SPQueryable", function() { return _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__["_SPQueryable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPQueryable", function() { return _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__["SPQueryable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_SPCollection", function() { return _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__["_SPCollection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPCollection", function() { return _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__["SPCollection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_SPInstance", function() { return _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__["_SPInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPInstance", function() { return _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__["SPInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteable", function() { return _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__["deleteable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteableWithETag", function() { return _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__["deleteableWithETag"]; });

/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decorators.js */ "hMpi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultPath", function() { return _decorators_js__WEBPACK_IMPORTED_MODULE_1__["defaultPath"]; });

/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operations.js */ "UK2s");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spGet", function() { return _operations_js__WEBPACK_IMPORTED_MODULE_2__["spGet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spPost", function() { return _operations_js__WEBPACK_IMPORTED_MODULE_2__["spPost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spPostMerge", function() { return _operations_js__WEBPACK_IMPORTED_MODULE_2__["spPostMerge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spPostDelete", function() { return _operations_js__WEBPACK_IMPORTED_MODULE_2__["spPostDelete"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spPostDeleteETag", function() { return _operations_js__WEBPACK_IMPORTED_MODULE_2__["spPostDeleteETag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spDelete", function() { return _operations_js__WEBPACK_IMPORTED_MODULE_2__["spDelete"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spPatch", function() { return _operations_js__WEBPACK_IMPORTED_MODULE_2__["spPatch"]; });

/* harmony import */ var _fi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fi.js */ "v6VW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPFI", function() { return _fi_js__WEBPACK_IMPORTED_MODULE_3__["SPFI"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spfi", function() { return _fi_js__WEBPACK_IMPORTED_MODULE_3__["spfi"]; });

/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types.js */ "tCQJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emptyGuid", function() { return _types_js__WEBPACK_IMPORTED_MODULE_4__["emptyGuid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrincipalType", function() { return _types_js__WEBPACK_IMPORTED_MODULE_4__["PrincipalType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrincipalSource", function() { return _types_js__WEBPACK_IMPORTED_MODULE_4__["PrincipalSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageType", function() { return _types_js__WEBPACK_IMPORTED_MODULE_4__["PageType"]; });

/* harmony import */ var _utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/extract-web-url.js */ "OXUt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractWebUrl", function() { return _utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_5__["extractWebUrl"]; });

/* harmony import */ var _utils_file_names_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/file-names.js */ "YFzv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "containsInvalidFileFolderChars", function() { return _utils_file_names_js__WEBPACK_IMPORTED_MODULE_6__["containsInvalidFileFolderChars"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stripInvalidFileFolderChars", function() { return _utils_file_names_js__WEBPACK_IMPORTED_MODULE_6__["stripInvalidFileFolderChars"]; });

/* harmony import */ var _utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/odata-url-from.js */ "hTrG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "odataUrlFrom", function() { return _utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_7__["odataUrlFrom"]; });

/* harmony import */ var _utils_to_resource_path_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/to-resource-path.js */ "G6u6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toResourcePath", function() { return _utils_to_resource_path_js__WEBPACK_IMPORTED_MODULE_8__["toResourcePath"]; });

/* harmony import */ var _utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/encode-path-str.js */ "vbtm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "encodePath", function() { return _utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_9__["encodePath"]; });

/* harmony import */ var _behaviors_defaults_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./behaviors/defaults.js */ "qZw7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultInit", function() { return _behaviors_defaults_js__WEBPACK_IMPORTED_MODULE_10__["DefaultInit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultHeaders", function() { return _behaviors_defaults_js__WEBPACK_IMPORTED_MODULE_10__["DefaultHeaders"]; });

/* harmony import */ var _behaviors_telemetry_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./behaviors/telemetry.js */ "nikm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Telemetry", function() { return _behaviors_telemetry_js__WEBPACK_IMPORTED_MODULE_11__["Telemetry"]; });

/* harmony import */ var _behaviors_request_digest_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./behaviors/request-digest.js */ "GfGO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequestDigest", function() { return _behaviors_request_digest_js__WEBPACK_IMPORTED_MODULE_12__["RequestDigest"]; });

/* harmony import */ var _behaviors_spbrowser_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./behaviors/spbrowser.js */ "Wjh3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPBrowser", function() { return _behaviors_spbrowser_js__WEBPACK_IMPORTED_MODULE_13__["SPBrowser"]; });

/* harmony import */ var _behaviors_spfx_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./behaviors/spfx.js */ "OWTB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPFxToken", function() { return _behaviors_spfx_js__WEBPACK_IMPORTED_MODULE_14__["SPFxToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SPFx", function() { return _behaviors_spfx_js__WEBPACK_IMPORTED_MODULE_14__["SPFx"]; });
















//# sourceMappingURL=index.js.map

/***/ }),

/***/ "UWqr":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UWqr__;

/***/ }),

/***/ "UuUm":
/*!***************************************************!*\
  !*** ./node_modules/@pnp/sp/site-groups/types.js ***!
  \***************************************************/
/*! exports provided: _SiteGroups, SiteGroups, _SiteGroup, SiteGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_SiteGroups", function() { return _SiteGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteGroups", function() { return SiteGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_SiteGroup", function() { return _SiteGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteGroup", function() { return SiteGroup; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _site_users_types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../site-users/types.js */ "y+KB");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../decorators.js */ "hMpi");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../operations.js */ "UK2s");






let _SiteGroups = class _SiteGroups extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__["_SPCollection"] {
    /**
     * Gets a group from the collection by id
     *
     * @param id The id of the group to retrieve
     */
    getById(id) {
        return SiteGroup(this).concat(`(${id})`);
    }
    /**
     * Adds a new group to the site collection
     *
     * @param properties The group properties object of property names and values to be set for the group
     */
    async add(properties) {
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__["spPost"])(this, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_3__["body"])(properties));
        return {
            data,
            group: this.getById(data.Id),
        };
    }
    /**
     * Gets a group from the collection by name
     *
     * @param groupName The name of the group to retrieve
     */
    getByName(groupName) {
        return SiteGroup(this, `getByName('${groupName}')`);
    }
    /**
     * Removes the group with the specified member id from the collection
     *
     * @param id The id of the group to remove
     */
    removeById(id) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__["spPost"])(SiteGroups(this, `removeById('${id}')`));
    }
    /**
     * Removes the cross-site group with the specified name from the collection
     *
     * @param loginName The name of the group to remove
     */
    removeByLoginName(loginName) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__["spPost"])(SiteGroups(this, `removeByLoginName('${loginName}')`));
    }
};
_SiteGroups = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_4__["defaultPath"])("sitegroups")
], _SiteGroups);

const SiteGroups = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__["spInvokableFactory"])(_SiteGroups);
class _SiteGroup extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__["_SPInstance"] {
    /**
     * Gets the users for this group
     *
     */
    get users() {
        return Object(_site_users_types_js__WEBPACK_IMPORTED_MODULE_2__["SiteUsers"])(this, "users");
    }
    /**
    * @param props Group properties to update
    */
    async update(props) {
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__["spPostMerge"])(this, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_3__["body"])(props));
        return {
            data,
            group: this,
        };
    }
    /**
     * Set the owner of a group using a user id
     * @param userId the id of the user that will be set as the owner of the current group
     */
    setUserAsOwner(userId) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__["spPost"])(SiteGroup(this, `SetUserAsOwner(${userId})`));
    }
}
const SiteGroup = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__["spInvokableFactory"])(_SiteGroup);
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "V4GX":
/*!*************************************************!*\
  !*** ./node_modules/@pnp/queryable/add-prop.js ***!
  \*************************************************/
/*! exports provided: addProp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProp", function() { return addProp; });
/**
 * Adds a property to a target instance
 *
 * @param target The object to whose prototype we will add a property
 * @param name Property name
 * @param factory Factory method used to produce the property value
 * @param path Any additional path required to produce the value
 */
function addProp(target, name, factory, path) {
    Reflect.defineProperty(target.prototype, name, {
        configurable: true,
        enumerable: true,
        get: function () {
            return factory(this, path || name);
        },
    });
}
//# sourceMappingURL=add-prop.js.map

/***/ }),

/***/ "VxMn":
/*!**********************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/caching.js ***!
  \**********************************************************/
/*! exports provided: CacheAlways, CacheNever, CacheKey, Caching, bindCachingCore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheAlways", function() { return CacheAlways; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheNever", function() { return CacheNever; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheKey", function() { return CacheKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Caching", function() { return Caching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindCachingCore", function() { return bindCachingCore; });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");

/**
 * Behavior that forces caching for the request regardless of "method"
 *
 * @returns TimelinePipe
 */
function CacheAlways() {
    return (instance) => {
        instance.on.pre.prepend(async function (url, init, result) {
            init.headers = { ...init.headers, "X-PnP-CacheAlways": "1" };
            return [url, init, result];
        });
        return instance;
    };
}
/**
 * Behavior that blocks caching for the request regardless of "method"
 *
 * Note: If both Caching and CacheAlways are present AND CacheNever is present the request will not be cached
 * as we give priority to the CacheNever case
 *
 * @returns TimelinePipe
 */
function CacheNever() {
    return (instance) => {
        instance.on.pre.prepend(async function (url, init, result) {
            init.headers = { ...init.headers, "X-PnP-CacheNever": "1" };
            return [url, init, result];
        });
        return instance;
    };
}
/**
 * Behavior that allows you to specify a cache key for a request
 *
 * @param key The key to use for caching
  */
function CacheKey(key) {
    return (instance) => {
        instance.on.pre.prepend(async function (url, init, result) {
            init.headers = { ...init.headers, "X-PnP-CacheKey": key };
            return [url, init, result];
        });
        return instance;
    };
}
/**
 * Adds caching to the requests based on the supplied props
 *
 * @param props Optional props that configure how caching will work
 * @returns TimelinePipe used to configure requests
 */
function Caching(props) {
    return (instance) => {
        instance.on.pre(async function (url, init, result) {
            const [shouldCache, getCachedValue, setCachedValue] = bindCachingCore(url, init, props);
            // only cache get requested data or where the CacheAlways header is present (allows caching of POST requests)
            if (shouldCache) {
                const cached = getCachedValue();
                // we need to ensure that result stays "undefined" unless we mean to set null as the result
                if (cached === null) {
                    // if we don't have a cached result we need to get it after the request is sent and parsed
                    this.on.post(Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["noInherit"])(async function (url, result) {
                        setCachedValue(result);
                        return [url, result];
                    }));
                }
                else {
                    result = cached;
                }
            }
            return [url, init, result];
        });
        return instance;
    };
}
const storage = new _pnp_core__WEBPACK_IMPORTED_MODULE_0__["PnPClientStorage"]();
/**
 * Based on the supplied properties, creates bound logic encapsulating common caching configuration
 * sharable across implementations to more easily provide consistent behavior across behaviors
 *
 * @param props Any caching props used to initialize the core functions
 */
function bindCachingCore(url, init, props) {
    var _a, _b;
    const { store, keyFactory, expireFunc } = {
        store: "local",
        keyFactory: (url) => Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["getHashCode"])(url.toLowerCase()).toString(),
        expireFunc: () => Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["dateAdd"])(new Date(), "minute", 5),
        ...props,
    };
    const s = store === "session" ? storage.session : storage.local;
    const key = (init === null || init === void 0 ? void 0 : init.headers["X-PnP-CacheKey"]) ? init.headers["X-PnP-CacheKey"] : keyFactory(url);
    return [
        // calculated value indicating if we should cache this request
        (/get/i.test(init.method) || ((_a = init === null || init === void 0 ? void 0 : init.headers["X-PnP-CacheAlways"]) !== null && _a !== void 0 ? _a : false)) && !((_b = init === null || init === void 0 ? void 0 : init.headers["X-PnP-CacheNever"]) !== null && _b !== void 0 ? _b : false),
        // gets the cached value
        () => s.get(key),
        // sets the cached value
        (value) => s.put(key, value, expireFunc(url)),
    ];
}
//# sourceMappingURL=caching.js.map

/***/ }),

/***/ "WE4i":
/*!***************************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/bearer-token.js ***!
  \***************************************************************/
/*! exports provided: BearerToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BearerToken", function() { return BearerToken; });
/* harmony import */ var _inject_headers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inject-headers.js */ "XOGp");

function BearerToken(token) {
    return (instance) => {
        instance.using(Object(_inject_headers_js__WEBPACK_IMPORTED_MODULE_0__["InjectHeaders"])({
            "Authorization": `Bearer ${token}`,
        }));
        return instance;
    };
}
//# sourceMappingURL=bearer-token.js.map

/***/ }),

/***/ "WjcV":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@microsoft/spfx-heft-plugins/node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./node_modules/react-slideshow-image/dist/styles.css ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../@microsoft/spfx-heft-plugins/node_modules/css-loader/dist/runtime/api.js */ "Z+AG")(false);
// Module
exports.push([module.i, ".react-slideshow-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative}.react-slideshow-container .nav{z-index:10;position:absolute;cursor:pointer}.react-slideshow-container .nav:first-of-type{left:0}.react-slideshow-container .nav:last-of-type{right:0}.react-slideshow-container .default-nav{height:30px;background:hsla(0,0%,100%,.6);width:30px;border:0;text-align:center;color:#fff;border-radius:50%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.react-slideshow-container .default-nav:focus,.react-slideshow-container .default-nav:hover{background:#fff;color:#666;outline:0}.react-slideshow-container .default-nav.disabled:hover{cursor:not-allowed}.react-slideshow-container .default-nav:first-of-type{margin-right:-30px;border-right:0;border-top:0}.react-slideshow-container .default-nav:last-of-type{margin-left:-30px}.react-slideshow-container+ul.indicators{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-top:20px}.react-slideshow-container+ul.indicators li{display:inline-block;position:relative;width:7px;height:7px;padding:5px;margin:0}.react-slideshow-container+ul.indicators .each-slideshow-indicator{border:0;opacity:.25;cursor:pointer;background:transparent;color:transparent}.react-slideshow-container+ul.indicators .each-slideshow-indicator:before{position:absolute;top:0;left:0;width:7px;height:7px;border-radius:50%;content:\"\";background:#000;text-align:center}.react-slideshow-container+ul.indicators .each-slideshow-indicator.active,.react-slideshow-container+ul.indicators .each-slideshow-indicator:hover{opacity:.75;outline:0}.react-slideshow-fadezoom-wrapper{width:100%;overflow:hidden}.react-slideshow-fadezoom-wrapper .react-slideshow-fadezoom-images-wrap{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.react-slideshow-fadezoom-wrapper .react-slideshow-fadezoom-images-wrap>div{position:relative;opacity:0}.react-slideshow-wrapper .react-slideshow-fade-images-wrap>div[aria-hidden=true]{display:none}.react-slideshow-wrapper.slide{width:100%;overflow:hidden}.react-slideshow-wrapper .images-wrap{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.react-slideshow-wrapper .images-wrap>div[aria-hidden=true]{display:none}", ""]);


/***/ }),

/***/ "Wjh3":
/*!*****************************************************!*\
  !*** ./node_modules/@pnp/sp/behaviors/spbrowser.js ***!
  \*****************************************************/
/*! exports provided: SPBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPBrowser", function() { return SPBrowser; });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaults.js */ "qZw7");
/* harmony import */ var _request_digest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request-digest.js */ "GfGO");




function SPBrowser(props) {
    if ((props === null || props === void 0 ? void 0 : props.baseUrl) && !Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["isUrlAbsolute"])(props.baseUrl)) {
        throw Error("SPBrowser props.baseUrl must be absolute when supplied.");
    }
    return (instance) => {
        instance.using(Object(_defaults_js__WEBPACK_IMPORTED_MODULE_2__["DefaultHeaders"])(), Object(_defaults_js__WEBPACK_IMPORTED_MODULE_2__["DefaultInit"])(), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__["BrowserFetchWithRetry"])(), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__["DefaultParse"])(), Object(_request_digest_js__WEBPACK_IMPORTED_MODULE_3__["RequestDigest"])());
        if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["isUrlAbsolute"])(props === null || props === void 0 ? void 0 : props.baseUrl)) {
            // we want to fix up the url first
            instance.on.pre.prepend(async (url, init, result) => {
                if (!Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["isUrlAbsolute"])(url)) {
                    url = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["combine"])(props.baseUrl, url);
                }
                return [url, init, result];
            });
        }
        return instance;
    };
}
//# sourceMappingURL=spbrowser.js.map

/***/ }),

/***/ "Ww49":
/*!**************************************************!*\
  !*** ./node_modules/@pnp/queryable/queryable.js ***!
  \**************************************************/
/*! exports provided: Queryable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Queryable", function() { return Queryable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "IwJs");
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _invokable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invokable.js */ "/sQB");



const DefaultMoments = {
    construct: Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__["lifecycle"])(),
    pre: Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__["asyncReduce"])(),
    auth: Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__["asyncReduce"])(),
    send: Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__["request"])(),
    parse: Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__["asyncReduce"])(),
    post: Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__["asyncReduce"])(),
    data: Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__["broadcast"])(),
};
let Queryable = class Queryable extends _pnp_core__WEBPACK_IMPORTED_MODULE_1__["Timeline"] {
    constructor(init, path) {
        super(DefaultMoments);
        // these keys represent internal events for Queryable, users are not expected to
        // subscribe directly to these, rather they enable functionality within Queryable
        // they are Symbols such that there are NOT cloned between queryables as we only grab string keys (by design)
        this.InternalResolve = Symbol.for("Queryable_Resolve");
        this.InternalReject = Symbol.for("Queryable_Reject");
        this.InternalPromise = Symbol.for("Queryable_Promise");
        this._query = new URLSearchParams();
        // add an intneral moment with specific implementaion for promise creation
        this.moments[this.InternalPromise] = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__["reduce"])();
        let parent;
        if (typeof init === "string") {
            this._url = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__["combine"])(init, path);
        }
        else if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__["isArray"])(init)) {
            if (init.length !== 2) {
                throw Error("When using the tuple param exactly two arguments are expected.");
            }
            if (typeof init[1] !== "string") {
                throw Error("Expected second tuple param to be a string.");
            }
            parent = init[0];
            this._url = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__["combine"])(init[1], path);
        }
        else {
            parent = init;
            this._url = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__["combine"])(parent._url, path);
        }
        if (typeof parent !== "undefined") {
            this.observers = parent.observers;
            this._inheritingObservers = true;
        }
    }
    /**
     * Directly concatenates the supplied string to the current url, not normalizing "/" chars
     *
     * @param pathPart The string to concatenate to the url
     */
    concat(pathPart) {
        this._url += pathPart;
        return this;
    }
    /**
     * Gets the full url with query information
     *
     */
    toRequestUrl() {
        let url = this.toUrl();
        const query = this.query.toString();
        if (!Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__["stringIsNullOrEmpty"])(query)) {
            url += `${url.indexOf("?") > -1 ? "&" : "?"}${query}`;
        }
        return url;
    }
    /**
     * Querystring key, value pairs which will be included in the request
     */
    get query() {
        return this._query;
    }
    /**
     * Gets the current url
     *
     */
    toUrl() {
        return this._url;
    }
    execute(userInit) {
        // if there are NO observers registered this is likely either a bug in the library or a user error, direct to docs
        if (Reflect.ownKeys(this.observers).length < 1) {
            throw Error("No observers registered for this request. (https://pnp.github.io/pnpjs/queryable/queryable#no-observers-registered-for-this-request)");
        }
        // schedule the execution after we return the promise below in the next event loop
        setTimeout(async () => {
            const requestId = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__["getGUID"])();
            let requestUrl;
            const log = (msg, level) => {
                // this allows us to easily and consistently format our messages
                this.log(`[${requestId}] ${msg}`, level);
            };
            try {
                log("Beginning request", 0);
                // include the request id in the headers to assist with debugging against logs
                const initSeed = {
                    ...userInit,
                    headers: { ...userInit.headers, "X-PnPjs-RequestId": requestId },
                };
                // eslint-disable-next-line prefer-const
                let [url, init, result] = await this.emit.pre(this.toRequestUrl(), initSeed, undefined);
                log(`Url: ${url}`, 1);
                if (typeof result !== "undefined") {
                    log("Result returned from pre, Emitting data");
                    this.emit.data(result);
                    log("Emitted data");
                    return;
                }
                log("Emitting auth");
                [requestUrl, init] = await this.emit.auth(new URL(url), init);
                log("Emitted auth");
                // we always resepect user supplied init over observer modified init
                init = { ...init, ...userInit, headers: { ...init.headers, ...userInit.headers } };
                log("Emitting send");
                let response = await this.emit.send(requestUrl, init);
                log("Emitted send");
                log("Emitting parse");
                [requestUrl, response, result] = await this.emit.parse(requestUrl, response, result);
                log("Emitted parse");
                log("Emitting post");
                [requestUrl, result] = await this.emit.post(requestUrl, result);
                log("Emitted post");
                log("Emitting data");
                this.emit.data(result);
                log("Emitted data");
            }
            catch (e) {
                log(`Emitting error: "${e.message || e}"`, 3);
                // anything that throws we emit and continue
                this.error(e);
                log("Emitted error", 3);
            }
            finally {
                log("Finished request", 0);
            }
        }, 0);
        // this is the promise that the calling code will recieve and await
        let promise = new Promise((resolve, reject) => {
            // we overwrite any pre-existing internal events as a
            // given queryable only processes a single request at a time
            this.on[this.InternalResolve].replace(resolve);
            this.on[this.InternalReject].replace(reject);
        });
        // this allows us to internally hook the promise creation and modify it. This was introduced to allow for
        // cancelable to work as envisioned, but may have other users. Meant for internal use in the library accessed via behaviors.
        [promise] = this.emit[this.InternalPromise](promise);
        return promise;
    }
};
Queryable = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__["extendable"])(),
    Object(_invokable_js__WEBPACK_IMPORTED_MODULE_2__["invokable"])()
], Queryable);

//# sourceMappingURL=queryable.js.map

/***/ }),

/***/ "XOGp":
/*!*****************************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/inject-headers.js ***!
  \*****************************************************************/
/*! exports provided: InjectHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InjectHeaders", function() { return InjectHeaders; });
function InjectHeaders(headers, prepend = false) {
    return (instance) => {
        const f = async function (url, init, result) {
            init.headers = { ...init.headers, ...headers };
            return [url, init, result];
        };
        if (prepend) {
            instance.on.pre.prepend(f);
        }
        else {
            instance.on.pre(f);
        }
        return instance;
    };
}
//# sourceMappingURL=inject-headers.js.map

/***/ }),

/***/ "YFzv":
/*!**************************************************!*\
  !*** ./node_modules/@pnp/sp/utils/file-names.js ***!
  \**************************************************/
/*! exports provided: containsInvalidFileFolderChars, stripInvalidFileFolderChars */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containsInvalidFileFolderChars", function() { return containsInvalidFileFolderChars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripInvalidFileFolderChars", function() { return stripInvalidFileFolderChars; });
// eslint-disable-next-line no-control-regex
const InvalidFileFolderNameCharsOnlineRegex = /["*:<>?/\\|\x00-\x1f\x7f-\x9f]/g;
// eslint-disable-next-line no-control-regex
const InvalidFileFolderNameCharsOnPremiseRegex = /["#%*:<>?/\\|\x00-\x1f\x7f-\x9f]/g;
/**
 * Checks if file or folder name contains invalid characters
 *
 * @param input File or folder name to check
 * @param onPremise Set to true for SharePoint On-Premise
 * @returns True if contains invalid chars, false otherwise
 */
function containsInvalidFileFolderChars(input, onPremise = false) {
    if (onPremise) {
        return InvalidFileFolderNameCharsOnPremiseRegex.test(input);
    }
    else {
        return InvalidFileFolderNameCharsOnlineRegex.test(input);
    }
}
/**
 * Removes invalid characters from file or folder name
 *
 * @param input File or folder name
 * @param replacer Value that will replace invalid characters
 * @param onPremise Set to true for SharePoint On-Premise
 * @returns File or folder name with replaced invalid characters
 */
function stripInvalidFileFolderChars(input, replacer = "", onPremise = false) {
    if (onPremise) {
        return input.replace(InvalidFileFolderNameCharsOnPremiseRegex, replacer);
    }
    else {
        return input.replace(InvalidFileFolderNameCharsOnlineRegex, replacer);
    }
}
//# sourceMappingURL=file-names.js.map

/***/ }),

/***/ "Ymo3":
/*!**********************************************!*\
  !*** ./node_modules/@pnp/queryable/index.js ***!
  \**********************************************/
/*! exports provided: addProp, invokable, get, post, put, patch, del, op, Queryable, queryableFactory, body, headers, BearerToken, BrowserFetch, BrowserFetchWithRetry, CacheAlways, CacheNever, CacheKey, Caching, bindCachingCore, CachingPessimisticRefresh, asCancelableScope, cancelableScope, Cancelable, CancelAction, InjectHeaders, DefaultParse, TextParse, BlobParse, JSONParse, BufferParse, HeaderParse, JSONHeaderParse, errorCheck, parseODataJSON, parseBinderWithErrorCheck, HttpRequestError, Timeout, ResolveOnData, RejectOnError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_prop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-prop.js */ "V4GX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addProp", function() { return _add_prop_js__WEBPACK_IMPORTED_MODULE_0__["addProp"]; });

/* harmony import */ var _invokable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invokable.js */ "/sQB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invokable", function() { return _invokable_js__WEBPACK_IMPORTED_MODULE_1__["invokable"]; });

/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operations.js */ "h6Ct");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "get", function() { return _operations_js__WEBPACK_IMPORTED_MODULE_2__["get"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "post", function() { return _operations_js__WEBPACK_IMPORTED_MODULE_2__["post"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "put", function() { return _operations_js__WEBPACK_IMPORTED_MODULE_2__["put"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "patch", function() { return _operations_js__WEBPACK_IMPORTED_MODULE_2__["patch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "del", function() { return _operations_js__WEBPACK_IMPORTED_MODULE_2__["del"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "op", function() { return _operations_js__WEBPACK_IMPORTED_MODULE_2__["op"]; });

/* harmony import */ var _queryable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./queryable.js */ "Ww49");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Queryable", function() { return _queryable_js__WEBPACK_IMPORTED_MODULE_3__["Queryable"]; });

/* harmony import */ var _queryable_factory_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./queryable-factory.js */ "359w");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryableFactory", function() { return _queryable_factory_js__WEBPACK_IMPORTED_MODULE_4__["queryableFactory"]; });

/* harmony import */ var _request_builders_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./request-builders.js */ "0qgB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "body", function() { return _request_builders_js__WEBPACK_IMPORTED_MODULE_5__["body"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "headers", function() { return _request_builders_js__WEBPACK_IMPORTED_MODULE_5__["headers"]; });

/* harmony import */ var _behaviors_bearer_token_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./behaviors/bearer-token.js */ "WE4i");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BearerToken", function() { return _behaviors_bearer_token_js__WEBPACK_IMPORTED_MODULE_6__["BearerToken"]; });

/* harmony import */ var _behaviors_browser_fetch_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./behaviors/browser-fetch.js */ "do2w");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserFetch", function() { return _behaviors_browser_fetch_js__WEBPACK_IMPORTED_MODULE_7__["BrowserFetch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserFetchWithRetry", function() { return _behaviors_browser_fetch_js__WEBPACK_IMPORTED_MODULE_7__["BrowserFetchWithRetry"]; });

/* harmony import */ var _behaviors_caching_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./behaviors/caching.js */ "VxMn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheAlways", function() { return _behaviors_caching_js__WEBPACK_IMPORTED_MODULE_8__["CacheAlways"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheNever", function() { return _behaviors_caching_js__WEBPACK_IMPORTED_MODULE_8__["CacheNever"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheKey", function() { return _behaviors_caching_js__WEBPACK_IMPORTED_MODULE_8__["CacheKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Caching", function() { return _behaviors_caching_js__WEBPACK_IMPORTED_MODULE_8__["Caching"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindCachingCore", function() { return _behaviors_caching_js__WEBPACK_IMPORTED_MODULE_8__["bindCachingCore"]; });

/* harmony import */ var _behaviors_caching_pessimistic_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./behaviors/caching-pessimistic.js */ "qL0N");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CachingPessimisticRefresh", function() { return _behaviors_caching_pessimistic_js__WEBPACK_IMPORTED_MODULE_9__["CachingPessimisticRefresh"]; });

/* harmony import */ var _behaviors_cancelable_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./behaviors/cancelable.js */ "+y5s");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asCancelableScope", function() { return _behaviors_cancelable_js__WEBPACK_IMPORTED_MODULE_10__["asCancelableScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cancelableScope", function() { return _behaviors_cancelable_js__WEBPACK_IMPORTED_MODULE_10__["cancelableScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cancelable", function() { return _behaviors_cancelable_js__WEBPACK_IMPORTED_MODULE_10__["Cancelable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CancelAction", function() { return _behaviors_cancelable_js__WEBPACK_IMPORTED_MODULE_10__["CancelAction"]; });

/* harmony import */ var _behaviors_inject_headers_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./behaviors/inject-headers.js */ "XOGp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InjectHeaders", function() { return _behaviors_inject_headers_js__WEBPACK_IMPORTED_MODULE_11__["InjectHeaders"]; });

/* harmony import */ var _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./behaviors/parsers.js */ "udT0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultParse", function() { return _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_12__["DefaultParse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextParse", function() { return _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_12__["TextParse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlobParse", function() { return _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_12__["BlobParse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JSONParse", function() { return _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_12__["JSONParse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BufferParse", function() { return _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_12__["BufferParse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderParse", function() { return _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_12__["HeaderParse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JSONHeaderParse", function() { return _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_12__["JSONHeaderParse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "errorCheck", function() { return _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_12__["errorCheck"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseODataJSON", function() { return _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_12__["parseODataJSON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseBinderWithErrorCheck", function() { return _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_12__["parseBinderWithErrorCheck"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpRequestError", function() { return _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_12__["HttpRequestError"]; });

/* harmony import */ var _behaviors_timeout_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./behaviors/timeout.js */ "ISfK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Timeout", function() { return _behaviors_timeout_js__WEBPACK_IMPORTED_MODULE_13__["Timeout"]; });

/* harmony import */ var _behaviors_resolvers_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./behaviors/resolvers.js */ "tGZ3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResolveOnData", function() { return _behaviors_resolvers_js__WEBPACK_IMPORTED_MODULE_14__["ResolveOnData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RejectOnError", function() { return _behaviors_resolvers_js__WEBPACK_IMPORTED_MODULE_14__["RejectOnError"]; });







/**
 * Behavior exports
 */









//# sourceMappingURL=index.js.map

/***/ }),

/***/ "Z+AG":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@microsoft/spfx-heft-plugins/node_modules/css-loader/dist/runtime/api.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "ZzSW":
/*!******************************************************************!*\
  !*** ./lib/webparts/masterPageRow2/components/MasterPageRow2.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pnp_sp_webs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/sp/webs */ "6k7F");
/* harmony import */ var _pnp_sp_lists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/sp/lists */ "J7sA");
/* harmony import */ var _pnp_sp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pnp/sp */ "UKGb");
/* harmony import */ var _pnp_sp_site_users_web__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pnp/sp/site-users/web */ "EjWy");
/* harmony import */ var _pnpConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pnpConfig */ "EXJb");
/* harmony import */ var _ImageSlider_ImageSliders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ImageSlider/ImageSliders */ "yy6+");
/* harmony import */ var _Feedback_Feedback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Feedback/Feedback */ "9twg");
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @microsoft/sp-webpart-base */ "br4S");
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _QuickLinks_QuickLinks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./QuickLinks/QuickLinks */ "iB+0");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var MasterPageRow2 = function (props) {
    var arr = [];
    var arrobj = [];
    var _a = react__WEBPACK_IMPORTED_MODULE_0__["useState"](), imagedata = _a[0], setImageData = _a[1];
    var _b = react__WEBPACK_IMPORTED_MODULE_0__["useState"](), depID = _b[0], setDepID = _b[1];
    var _c = react__WEBPACK_IMPORTED_MODULE_0__["useState"](), repMan = _c[0], setRepMan = _c[1];
    var _d = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(), quicklinkdata = _d[0], SetQuickLinkData = _d[1];
    //  const [listdata,setListdata] = React.useState<IListitems>({Title:"",Icon:"",url:""});
    var caml3 = {
        ViewXml: "<View><ViewFields><FieldRef Name='Title'/><FieldRef Name='image'/></ViewFields><RowLimit>5</RowLimit></View>",
    };
    var getUserData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _sp, list, user, userobj, r, y;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _sp = Object(_pnpConfig__WEBPACK_IMPORTED_MODULE_5__["getSP"])(props.context);
                    return [4 /*yield*/, _sp.web.lists.getByTitle("EmployeeDetails")];
                case 1:
                    list = _a.sent();
                    return [4 /*yield*/, _sp.web.currentUser()];
                case 2:
                    user = _a.sent();
                    console.log(user);
                    userobj = user.Email;
                    return [4 /*yield*/, list.items.filter("Name/EMail eq '" + userobj + "'")()];
                case 3:
                    r = _a.sent();
                    return [4 /*yield*/, list.items.select('ReportingManager/EMail').expand('ReportingManager').filter("Name/EMail eq '" + userobj + "'")()];
                case 4:
                    y = _a.sent();
                    console.log(r);
                    console.log(y);
                    // var r=await list.getItemsByCAMLQuery(caml4,"Name")
                    y.map(function (x) {
                        console.log(x.ReportingManager.EMail);
                        setRepMan(x.ReportingManager.EMail);
                    });
                    r.map(function (x) {
                        console.log(x.DepartmentId);
                        setDepID(x.DepartmentId);
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    var getQuickLinkData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _sp, qllist, qlistitems;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _sp = Object(_pnpConfig__WEBPACK_IMPORTED_MODULE_5__["getSP"])(props.context);
                    return [4 /*yield*/, _sp.web.lists.getByTitle("Document Library")];
                case 1:
                    qllist = _a.sent();
                    return [4 /*yield*/, qllist.items()];
                case 2:
                    qlistitems = _a.sent();
                    qlistitems.map(function (x) {
                        console.log(x.Title);
                        var imgobj = x.Icon;
                        var jobj = JSON.parse(imgobj);
                        console.log(window.location.protocol + "//" + window.location.host + jobj.serverRelativeUrl);
                        console.log(x.URL.Url);
                        // updatedItem={Title:x.Title};
                        arrobj.push({ Title: x.Title, Icon: window.location.protocol + "//" + window.location.host + jobj.serverRelativeUrl, Url: x.URL.Url });
                        console.log(arrobj);
                    });
                    SetQuickLinkData(arrobj);
                    console.log(quicklinkdata);
                    return [2 /*return*/];
            }
        });
    }); };
    var getImageData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _sp, list, r, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    _sp = Object(_pnpConfig__WEBPACK_IMPORTED_MODULE_5__["getSP"])(props.context);
                    return [4 /*yield*/, _sp.web.lists.getByTitle("cursol2")];
                case 1:
                    list = _a.sent();
                    return [4 /*yield*/, list.getItemsByCAMLQuery(caml3)];
                case 2:
                    r = _a.sent();
                    console.log(r);
                    r.map(function (x) {
                        var y = JSON.parse(x.image);
                        console.log(y.serverUrl + y.serverRelativeUrl);
                        arr.push(y.serverUrl + y.serverRelativeUrl);
                    });
                    console.log(arr);
                    setImageData(arr);
                    // console.log(imagedata,'hello');
                    console.log("Hello");
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    console.log(e_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    // setImageData("a");
    // const execute = async () => {
    //   await getImageData();
    // };
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        try {
            console.log("hi");
            getImageData();
            console.log("hello");
            getUserData();
            getQuickLinkData();
        }
        catch (e) {
            console.log(e);
        }
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "mainContainer" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "Containers1" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row2container__part1" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ImageSlider_ImageSliders__WEBPACK_IMPORTED_MODULE_6__["default"], { data: imagedata })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row2container__part2" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_QuickLinks_QuickLinks__WEBPACK_IMPORTED_MODULE_9__["default"], { data: quicklinkdata }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Feedback_Feedback__WEBPACK_IMPORTED_MODULE_7__["default"], { context: _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_8__["WebPartContext"], depID: depID, repman: repMan })))));
};
/* harmony default export */ __webpack_exports__["default"] = (MasterPageRow2);


/***/ }),

/***/ "aH1g":
/*!************************************************!*\
  !*** ./node_modules/@pnp/logging/listeners.js ***!
  \************************************************/
/*! exports provided: ConsoleListener, FunctionListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleListener", function() { return ConsoleListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionListener", function() { return FunctionListener; });
function ConsoleListener(prefix, colors) {
    return new _ConsoleListener(prefix, colors);
}
function withColor(msg, color) {
    if (typeof color === "undefined") {
        console.log(msg);
    }
    else {
        console.log(`%c${msg}`, `color:${color}`);
    }
}
/**
 * Formats the message
 *
 * @param entry The information to format into a string
 */
function entryToString(entry, prefix) {
    const msg = [];
    if (prefix.length > 0) {
        msg.push(`${prefix} -`);
    }
    msg.push(entry.message);
    if (entry.data !== undefined) {
        try {
            msg.push("Data: " + JSON.stringify(entry.data));
        }
        catch (e) {
            msg.push(`Data: Error in stringify of supplied data ${e}`);
        }
    }
    return msg.join(" ");
}
// index order matters, this is a lookup table based on the corresponding LogLevel value
const colorProps = ["verbose", "info", "warning", "error"];
/**
 * Implementation of LogListener which logs to the console
 *
 */
class _ConsoleListener {
    /**
     * Makes a new one
     *
     * @param prefix Optional text to include at the start of all messages (useful for filtering)
     * @param colors Optional text color settings
     */
    constructor(_prefix = "", _colors = {}) {
        this._prefix = _prefix;
        this._colors = _colors;
    }
    /**
     * Any associated data that a given logging listener may choose to log or ignore
     *
     * @param entry The information to be logged
     */
    log(entry) {
        withColor(entryToString(entry, this._prefix), this._colors[colorProps[entry.level]]);
    }
}
function FunctionListener(impl) {
    return new _FunctionListener(impl);
}
/**
 * Implementation of LogListener which logs to the supplied function
 *
 */
class _FunctionListener {
    /**
     * Creates a new instance of the FunctionListener class
     *
     * @constructor
     * @param  method The method to which any logging data will be passed
     */
    constructor(method) {
        this.method = method;
    }
    /**
     * Any associated data that a given logging listener may choose to log or ignore
     *
     * @param entry The information to be logged
     */
    log(entry) {
        this.method(entry);
    }
}
//# sourceMappingURL=listeners.js.map

/***/ }),

/***/ "bdgK":
/*!*************************************************************************!*\
  !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["default"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../@microsoft/sp-build-web/node_modules/webpack/buildin/global.js */ "vicT")))

/***/ }),

/***/ "br4S":
/*!*********************************************!*\
  !*** external "@microsoft/sp-webpart-base" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_br4S__;

/***/ }),

/***/ "cDcd":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cDcd__;

/***/ }),

/***/ "dVsc":
/*!********************************************!*\
  !*** ./node_modules/@pnp/sp/webs/types.js ***!
  \********************************************/
/*! exports provided: _Webs, Webs, _Web, Web */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Webs", function() { return _Webs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Webs", function() { return Webs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Web", function() { return _Web; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Web", function() { return Web; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../decorators.js */ "hMpi");
/* harmony import */ var _utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/odata-url-from.js */ "hTrG");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../operations.js */ "UK2s");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../index.js */ "UKGb");
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/encode-path-str.js */ "vbtm");









let _Webs = class _Webs extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__["_SPCollection"] {
    /**
     * Adds a new web to the collection
     *
     * @param title The new web's title
     * @param url The new web's relative url
     * @param description The new web's description
     * @param template The new web's template internal name (default = STS)
     * @param language The locale id that specifies the new web's language (default = 1033 [English, US])
     * @param inheritPermissions When true, permissions will be inherited from the new web's parent (default = true)
     */
    async add(Title, Url, Description = "", WebTemplate = "STS", Language = 1033, UseSamePermissionsAsParentSite = true) {
        const postBody = Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__["body"])({
            "parameters": {
                Description,
                Language,
                Title,
                Url,
                UseSamePermissionsAsParentSite,
                WebTemplate,
            },
        });
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__["spPost"])(Webs(this, "add"), postBody);
        return {
            data,
            web: Web([this, Object(_utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_4__["odataUrlFrom"])(data).replace(/_api\/web\/?/i, "")]),
        };
    }
};
_Webs = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_3__["defaultPath"])("webs")
], _Webs);

const Webs = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__["spInvokableFactory"])(_Webs);
/**
 * Ensures the url passed to the constructor is correctly rebased to a web url
 *
 * @param candidate The candidate web url
 * @param path The caller supplied path, which may contain _api, meaning we don't append _api/web
 */
function rebaseWebUrl(candidate, path) {
    let replace = "_api/web";
    // this allows us to both:
    // - test if `candidate` already has an api path
    // - ensure that we append the correct one as sometimes a web is not defined
    //   by _api/web, in the case of _api/site/rootweb for example
    const matches = /(_api[/|\\](site|web))/i.exec(candidate);
    if ((matches === null || matches === void 0 ? void 0 : matches.length) > 0) {
        // we want just the base url part (before the _api)
        candidate = Object(_index_js__WEBPACK_IMPORTED_MODULE_6__["extractWebUrl"])(candidate);
        // we want to ensure we put back the correct string
        replace = matches[1];
    }
    // we only need to append the _api part IF `path` doesn't already include it.
    if ((path === null || path === void 0 ? void 0 : path.indexOf("_api")) < 0) {
        candidate = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_7__["combine"])(candidate, replace);
    }
    return candidate;
}
/**
 * Describes a web
 *
 */
let _Web = class _Web extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__["_SPInstance"] {
    constructor(base, path) {
        if (typeof base === "string") {
            base = rebaseWebUrl(base, path);
        }
        else if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_7__["isArray"])(base)) {
            base = [base[0], rebaseWebUrl(base[1], path)];
        }
        else {
            base = [base, rebaseWebUrl(base.toUrl(), path)];
        }
        super(base, path);
        this.delete = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__["deleteable"])();
    }
    /**
     * Gets this web's subwebs
     *
     */
    get webs() {
        return Webs(this);
    }
    /**
     * Allows access to the web's all properties collection
     */
    get allProperties() {
        return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__["SPInstance"])(this, "allproperties");
    }
    /**
     * Gets a collection of WebInfos for this web's subwebs
     *
     */
    get webinfos() {
        return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__["SPCollection"])(this, "webinfos");
    }
    /**
     * Gets this web's parent web and data
     *
     */
    async getParentWeb() {
        const { Url, ParentWeb } = await this.select("Url", "ParentWeb/ServerRelativeUrl").expand("ParentWeb")();
        if (ParentWeb === null || ParentWeb === void 0 ? void 0 : ParentWeb.ServerRelativeUrl) {
            return Web([this, Object(_pnp_core__WEBPACK_IMPORTED_MODULE_7__["combine"])((new URL(Url)).origin, ParentWeb.ServerRelativeUrl)]);
        }
        return null;
    }
    /**
     * Updates this web instance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the web
     */
    async update(properties) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__["spPostMerge"])(this, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__["body"])(properties));
    }
    /**
     * Applies the theme specified by the contents of each of the files specified in the arguments to the site
     *
     * @param colorPaletteUrl The server-relative URL of the color palette file
     * @param fontSchemeUrl The server-relative URL of the font scheme
     * @param backgroundImageUrl The server-relative URL of the background image
     * @param shareGenerated When true, the generated theme files are stored in the root site. When false, they are stored in this web
     */
    applyTheme(colorPaletteUrl, fontSchemeUrl, backgroundImageUrl, shareGenerated) {
        const postBody = Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__["body"])({
            backgroundImageUrl,
            colorPaletteUrl,
            fontSchemeUrl,
            shareGenerated,
        });
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__["spPost"])(Web(this, "applytheme"), postBody);
    }
    /**
     * Applies the specified site definition or site template to the Web site that has no template applied to it
     *
     * @param template Name of the site definition or the name of the site template
     */
    applyWebTemplate(template) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__["spPost"])(Web(this, `applywebtemplate(webTemplate='${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_8__["encodePath"])(template)}')`));
    }
    /**
     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query
     *
     * @param query The change query
     */
    getChanges(query) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__["spPost"])(Web(this, "getchanges"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__["body"])({ query }));
    }
    /**
     * Returns the name of the image file for the icon that is used to represent the specified file
     *
     * @param filename The file name. If this parameter is empty, the server returns an empty string
     * @param size The size of the icon: 16x16 pixels = 0, 32x32 pixels = 1 (default = 0)
     * @param progId The ProgID of the application that was used to create the file, in the form OLEServerName.ObjectName
     */
    mapToIcon(filename, size = 0, progId = "") {
        return Web(this, `maptoicon(filename='${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_8__["encodePath"])(filename)}',progid='${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_8__["encodePath"])(progId)}',size=${size})`)();
    }
    /**
     * Returns the tenant property corresponding to the specified key in the app catalog site
     *
     * @param key Id of storage entity to be set
     */
    getStorageEntity(key) {
        return Web(this, `getStorageEntity('${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_8__["encodePath"])(key)}')`)();
    }
    /**
     * This will set the storage entity identified by the given key (MUST be called in the context of the app catalog)
     *
     * @param key Id of storage entity to be set
     * @param value Value of storage entity to be set
     * @param description Description of storage entity to be set
     * @param comments Comments of storage entity to be set
     */
    setStorageEntity(key, value, description = "", comments = "") {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__["spPost"])(Web(this, "setStorageEntity"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__["body"])({
            comments,
            description,
            key,
            value,
        }));
    }
    /**
     * This will remove the storage entity identified by the given key
     *
     * @param key Id of storage entity to be removed
     */
    removeStorageEntity(key) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__["spPost"])(Web(this, `removeStorageEntity('${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_8__["encodePath"])(key)}')`));
    }
    /**
    * Returns a collection of objects that contain metadata about subsites of the current site in which the current user is a member.
    *
    * @param nWebTemplateFilter Specifies the site definition (default = -1)
    * @param nConfigurationFilter A 16-bit integer that specifies the identifier of a configuration (default = -1)
    */
    getSubwebsFilteredForCurrentUser(nWebTemplateFilter = -1, nConfigurationFilter = -1) {
        return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__["SPCollection"])(this, `getSubwebsFilteredForCurrentUser(nWebTemplateFilter=${nWebTemplateFilter},nConfigurationFilter=${nConfigurationFilter})`);
    }
    /**
     * Returns a collection of site templates available for the site
     *
     * @param language The locale id of the site templates to retrieve (default = 1033 [English, US])
     * @param includeCrossLanguage When true, includes language-neutral site templates; otherwise false (default = true)
     */
    availableWebTemplates(language = 1033, includeCrossLanugage = true) {
        return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__["SPCollection"])(this, `getavailablewebtemplates(lcid=${language},doincludecrosslanguage=${includeCrossLanugage})`);
    }
};
_Web = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_3__["defaultPath"])("_api/web")
], _Web);

const Web = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__["spInvokableFactory"])(_Web);
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "do2w":
/*!****************************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/browser-fetch.js ***!
  \****************************************************************/
/*! exports provided: BrowserFetch, BrowserFetchWithRetry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserFetch", function() { return BrowserFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserFetchWithRetry", function() { return BrowserFetchWithRetry; });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _parsers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsers.js */ "udT0");


function BrowserFetch(props) {
    const { replace } = {
        replace: true,
        ...props,
    };
    return (instance) => {
        if (replace) {
            instance.on.send.clear();
        }
        instance.on.send(function (url, init) {
            this.log(`Fetch: ${init.method} ${url.toString()}`, 0);
            return fetch(url.toString(), init);
        });
        return instance;
    };
}
function BrowserFetchWithRetry(props) {
    const { interval, replace, retries } = {
        replace: true,
        interval: 200,
        retries: 3,
        ...props,
    };
    return (instance) => {
        if (replace) {
            instance.on.send.clear();
        }
        instance.on.send(function (url, init) {
            let response;
            let wait = interval;
            let count = 0;
            let lastErr;
            const retry = async () => {
                // if we've tried too many times, throw
                if (count >= retries) {
                    throw lastErr || new _parsers_js__WEBPACK_IMPORTED_MODULE_1__["HttpRequestError"](`Retry count exceeded (${retries}) for this request. ${response.status}: ${response.statusText};`, response);
                }
                count++;
                if (typeof response === "undefined" || (response === null || response === void 0 ? void 0 : response.status) === 429 || (response === null || response === void 0 ? void 0 : response.status) === 503 || (response === null || response === void 0 ? void 0 : response.status) === 504) {
                    // this is our first try and response isn't defined yet
                    // we have been throttled OR http status code 503 or 504, we can retry this
                    if (typeof response !== "undefined") {
                        // this isn't our first try so we need to calculate delay
                        if (response.headers.has("Retry-After")) {
                            // if we have gotten a header, use that value as the delay value in seconds
                            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                            wait = parseInt(response.headers.get("Retry-After"), 10) * 1000;
                        }
                        else {
                            // Increment our counters.
                            wait *= 2;
                        }
                        this.log(`Attempt #${count} to retry request which failed with ${response.status}: ${response.statusText}`, 0);
                        await Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["delay"])(wait);
                    }
                    try {
                        const u = url.toString();
                        this.log(`Fetch: ${init.method} ${u}`, 0);
                        response = await fetch(u, init);
                        // if we got a good response, return it, otherwise see if we can retry
                        return response.ok ? response : retry();
                    }
                    catch (err) {
                        if (/AbortError/.test(err.name)) {
                            // don't retry aborted requests
                            throw err;
                        }
                        // if there is no network the response is undefined and err is all we have
                        // so we grab the err and save it to throw if we exceed the number of retries
                        // #2226 first reported this
                        lastErr = err;
                        return retry();
                    }
                }
                else {
                    return response;
                }
            };
            // this the the first call to retry that starts the cycle
            // response is undefined and the other values have their defaults
            return retry();
        });
        return instance;
    };
}
//# sourceMappingURL=browser-fetch.js.map

/***/ }),

/***/ "eKJE":
/*!************************************************!*\
  !*** ./node_modules/@pnp/sp/profiles/index.js ***!
  \************************************************/
/*! exports provided: Profiles, UrlZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fi.js */ "v6VW");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "+QQQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Profiles", function() { return _types_js__WEBPACK_IMPORTED_MODULE_1__["Profiles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlZone", function() { return _types_js__WEBPACK_IMPORTED_MODULE_1__["UrlZone"]; });




Reflect.defineProperty(_fi_js__WEBPACK_IMPORTED_MODULE_0__["SPFI"].prototype, "profiles", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.create(_types_js__WEBPACK_IMPORTED_MODULE_1__["Profiles"]);
    },
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "faye":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_faye__;

/***/ }),

/***/ "h6Ct":
/*!***************************************************!*\
  !*** ./node_modules/@pnp/queryable/operations.js ***!
  \***************************************************/
/*! exports provided: get, post, put, patch, del, op */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post", function() { return post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "put", function() { return put; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patch", function() { return patch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "del", function() { return del; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op", function() { return op; });
function ensureInit(method, init = { headers: {} }) {
    return { method, ...init, headers: { ...init.headers } };
}
function get(init) {
    return this.start(ensureInit("GET", init));
}
function post(init) {
    return this.start(ensureInit("POST", init));
}
function put(init) {
    return this.start(ensureInit("PUT", init));
}
function patch(init) {
    return this.start(ensureInit("PATCH", init));
}
function del(init) {
    return this.start(ensureInit("DELETE", init));
}
function op(q, operation, init) {
    return Reflect.apply(operation, q, [init]);
}
//# sourceMappingURL=operations.js.map

/***/ }),

/***/ "hMpi":
/*!********************************************!*\
  !*** ./node_modules/@pnp/sp/decorators.js ***!
  \********************************************/
/*! exports provided: defaultPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultPath", function() { return defaultPath; });
/**
 * Decorator used to specify the default path for SPQueryable objects
 *
 * @param path
 */
function defaultPath(path) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (target) {
        return class extends target {
            constructor(...args) {
                super(args[0], args.length > 1 && args[1] !== undefined ? args[1] : path);
            }
        };
    };
}
//# sourceMappingURL=decorators.js.map

/***/ }),

/***/ "hTrG":
/*!******************************************************!*\
  !*** ./node_modules/@pnp/sp/utils/odata-url-from.js ***!
  \******************************************************/
/*! exports provided: odataUrlFrom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "odataUrlFrom", function() { return odataUrlFrom; });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _extract_web_url_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extract-web-url.js */ "OXUt");


function odataUrlFrom(candidate) {
    const parts = [];
    const s = ["odata.type", "odata.editLink", "__metadata", "odata.metadata", "odata.id"];
    if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["hOP"])(candidate, s[0]) && candidate[s[0]] === "SP.Web") {
        // webs return an absolute url in the id
        if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["hOP"])(candidate, s[4])) {
            parts.push(candidate[s[4]]);
        }
        else if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["hOP"])(candidate, s[2])) {
            // we are dealing with verbose, which has an absolute uri
            parts.push(candidate.__metadata.uri);
        }
    }
    else {
        if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["hOP"])(candidate, s[3]) && Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["hOP"])(candidate, s[1])) {
            // we are dealign with minimal metadata (default)
            // some entities return an abosolute url in the editlink while for others it is relative
            // without the _api. This code is meant to handle both situations
            const editLink = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["isUrlAbsolute"])(candidate[s[1]]) ? candidate[s[1]].split("_api")[1] : candidate[s[1]];
            parts.push(Object(_extract_web_url_js__WEBPACK_IMPORTED_MODULE_1__["extractWebUrl"])(candidate[s[3]]), "_api", editLink);
        }
        else if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["hOP"])(candidate, s[1])) {
            parts.push("_api", candidate[s[1]]);
        }
        else if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["hOP"])(candidate, s[2])) {
            // we are dealing with verbose, which has an absolute uri
            parts.push(candidate.__metadata.uri);
        }
    }
    if (parts.length < 1) {
        return "";
    }
    return Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["combine"])(...parts);
}
//# sourceMappingURL=odata-url-from.js.map

/***/ }),

/***/ "hy0S":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/lists/types.js ***!
  \*********************************************/
/*! exports provided: _Lists, Lists, _List, List, RenderListDataOptions, ControlMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Lists", function() { return _Lists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lists", function() { return Lists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_List", function() { return _List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderListDataOptions", function() { return RenderListDataOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlMode", function() { return ControlMode; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/odata-url-from.js */ "hTrG");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../decorators.js */ "hMpi");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../operations.js */ "UK2s");
/* harmony import */ var _utils_to_resource_path_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/to-resource-path.js */ "G6u6");
/* harmony import */ var _utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/encode-path-str.js */ "vbtm");









let _Lists = class _Lists extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__["_SPCollection"] {
    /**
     * Gets a list from the collection by guid id
     *
     * @param id The Id of the list (GUID)
     */
    getById(id) {
        return List(this).concat(`('${id}')`);
    }
    /**
     * Gets a list from the collection by title
     *
     * @param title The title of the list
     */
    getByTitle(title) {
        return List(this, `getByTitle('${Object(_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_8__["encodePath"])(title)}')`);
    }
    /**
     * Adds a new list to the collection
     *
     * @param title The new list's title
     * @param description The new list's description
     * @param template The list template value
     * @param enableContentTypes If true content types will be allowed and enabled, otherwise they will be disallowed and not enabled
     * @param additionalSettings Will be passed as part of the list creation body
     */
    async add(title, desc = "", template = 100, enableContentTypes = false, additionalSettings = {}) {
        const addSettings = {
            "AllowContentTypes": enableContentTypes,
            "BaseTemplate": template,
            "ContentTypesEnabled": enableContentTypes,
            "Description": desc,
            "Title": title,
            ...additionalSettings,
        };
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_6__["spPost"])(this, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__["body"])(addSettings));
        return { data, list: this.getByTitle(addSettings.Title) };
    }
    /**
     * Ensures that the specified list exists in the collection (note: this method not supported for batching)
     *
     * @param title The new list's title
     * @param desc The new list's description
     * @param template The list template value
     * @param enableContentTypes If true content types will be allowed and enabled, otherwise they will be disallowed and not enabled
     * @param additionalSettings Will be passed as part of the list creation body or used to update an existing list
     */
    async ensure(title, desc = "", template = 100, enableContentTypes = false, additionalSettings = {}) {
        const addOrUpdateSettings = { Title: title, Description: desc, ContentTypesEnabled: enableContentTypes, ...additionalSettings };
        const list = this.getByTitle(addOrUpdateSettings.Title);
        try {
            await list.select("Title")();
            const data = await list.update(addOrUpdateSettings).then(r => r.data);
            return { created: false, data, list: this.getByTitle(addOrUpdateSettings.Title) };
        }
        catch (e) {
            const data = await this.add(title, desc, template, enableContentTypes, addOrUpdateSettings).then(r => r.data);
            return { created: true, data, list: this.getByTitle(addOrUpdateSettings.Title) };
        }
    }
    /**
     * Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages.
     */
    async ensureSiteAssetsLibrary() {
        const json = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_6__["spPost"])(Lists(this, "ensuresiteassetslibrary"));
        return List([this, Object(_utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_4__["odataUrlFrom"])(json)]);
    }
    /**
     * Gets a list that is the default location for wiki pages.
     */
    async ensureSitePagesLibrary() {
        const json = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_6__["spPost"])(Lists(this, "ensuresitepageslibrary"));
        return List([this, Object(_utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_4__["odataUrlFrom"])(json)]);
    }
};
_Lists = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_5__["defaultPath"])("lists")
], _Lists);

const Lists = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__["spInvokableFactory"])(_Lists);
class _List extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__["_SPInstance"] {
    constructor() {
        super(...arguments);
        this.delete = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__["deleteableWithETag"])();
    }
    /**
     * Gets the effective base permissions of this list
     *
     */
    get effectiveBasePermissions() {
        return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__["SPQueryable"])(this, "EffectiveBasePermissions");
    }
    /**
     * Gets the event receivers attached to this list
     *
     */
    get eventReceivers() {
        return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__["SPCollection"])(this, "EventReceivers");
    }
    /**
     * Gets the related fields of this list
     *
     */
    get relatedFields() {
        return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__["SPQueryable"])(this, "getRelatedFields");
    }
    /**
     * Gets the IRM settings for this list
     *
     */
    get informationRightsManagementSettings() {
        return Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__["SPQueryable"])(this, "InformationRightsManagementSettings");
    }
    /**
     * Updates this list intance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the list
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    async update(properties, eTag = "*") {
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_6__["spPostMerge"])(this, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__["body"])(properties, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__["headers"])({ "IF-Match": eTag })));
        const list = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__["hOP"])(properties, "Title") ? this.getParent(List, `getByTitle('${properties.Title}')`) : List(this);
        return {
            data,
            list,
        };
    }
    /**
     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query.
     * @param query A query that is performed against the change log.
     */
    getChanges(query) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_6__["spPost"])(List(this, "getchanges"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__["body"])({ query }));
    }
    /**
     * Returns the collection of items in the list based on the provided CamlQuery
     * @param query A query that is performed against the list
     * @param expands An expanded array of n items that contains fields to expand in the CamlQuery
     */
    getItemsByCAMLQuery(query, ...expands) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_6__["spPost"])(List(this, "getitems").expand(...expands), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__["body"])({ query }));
    }
    /**
     * See: https://msdn.microsoft.com/en-us/library/office/dn292554.aspx
     * @param query An object that defines the change log item query
     */
    getListItemChangesSinceToken(query) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_6__["spPost"])(List(this, "getlistitemchangessincetoken").using(Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__["TextParse"])()), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__["body"])({ query }));
    }
    /**
     * Moves the list to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    async recycle() {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_6__["spPost"])(List(this, "recycle"));
    }
    /**
     * Renders list data based on the view xml provided
     * @param viewXml A string object representing a view xml
     */
    async renderListData(viewXml) {
        const q = List(this, "renderlistdata(@viewXml)");
        q.query.set("@viewXml", `'${viewXml}'`);
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_6__["spPost"])(q);
        return JSON.parse(data);
    }
    /**
     * Returns the data for the specified query view
     *
     * @param parameters The parameters to be used to render list data as JSON string.
     * @param overrideParams The parameters that are used to override and extend the regular SPRenderListDataParameters.
     * @param query Allows setting of query parameters
     */
    // eslint-disable-next-line max-len
    renderListDataAsStream(parameters, overrideParameters = null, query = new Map()) {
        if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__["hOP"])(parameters, "RenderOptions") && Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__["isArray"])(parameters.RenderOptions)) {
            parameters.RenderOptions = parameters.RenderOptions.reduce((v, c) => v + c);
        }
        const clone = List(this, "RenderListDataAsStream");
        if (query && query.size > 0) {
            query.forEach((v, k) => clone.query.set(k, v));
        }
        const params = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__["objectDefinedNotNull"])(overrideParameters) ? { parameters, overrideParameters } : { parameters };
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_6__["spPost"])(clone, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__["body"])(params));
    }
    /**
     * Gets the field values and field schema attributes for a list item.
     * @param itemId Item id of the item to render form data for
     * @param formId The id of the form
     * @param mode Enum representing the control mode of the form (Display, Edit, New)
     */
    async renderListFormData(itemId, formId, mode) {
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_6__["spPost"])(List(this, `renderlistformdata(itemid=${itemId}, formid='${formId}', mode='${mode}')`));
        // data will be a string, so we parse it again
        return JSON.parse(data);
    }
    /**
     * Reserves a list item ID for idempotent list item creation.
     */
    async reserveListItemId() {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_6__["spPost"])(List(this, "reservelistitemid"));
    }
    /**
     * Creates an item using path (in a folder), validates and sets its field values.
     *
     * @param formValues The fields to change and their new values.
     * @param decodedUrl Path decoded url; folder's server relative path.
     * @param bNewDocumentUpdate true if the list item is a document being updated after upload; otherwise false.
     * @param checkInComment Optional check in comment.
     * @param additionalProps Optional set of additional properties LeafName new document file name,
     */
    async addValidateUpdateItemUsingPath(formValues, decodedUrl, bNewDocumentUpdate = false, checkInComment, additionalProps) {
        const addProps = {
            FolderPath: Object(_utils_to_resource_path_js__WEBPACK_IMPORTED_MODULE_7__["toResourcePath"])(decodedUrl),
        };
        if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__["objectDefinedNotNull"])(additionalProps)) {
            if (additionalProps.leafName) {
                addProps.LeafName = Object(_utils_to_resource_path_js__WEBPACK_IMPORTED_MODULE_7__["toResourcePath"])(additionalProps.leafName);
            }
            if (additionalProps.objectType) {
                addProps.UnderlyingObjectType = additionalProps.objectType;
            }
        }
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_6__["spPost"])(List(this, "AddValidateUpdateItemUsingPath()"), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_2__["body"])({
            bNewDocumentUpdate,
            checkInComment,
            formValues,
            listItemCreateInfo: addProps,
        }));
    }
    /**
     * Gets the parent information for this item's list and web
     */
    async getParentInfos() {
        const urlInfo = await this.select("Id", "RootFolder/UniqueId", "RootFolder/ServerRelativeUrl", "RootFolder/ServerRelativePath", "ParentWeb/Id", "ParentWeb/Url", "ParentWeb/ServerRelativeUrl", "ParentWeb/ServerRelativePath").expand("RootFolder", "ParentWeb")();
        return {
            List: {
                Id: urlInfo.Id,
                RootFolderServerRelativePath: urlInfo.RootFolder.ServerRelativePath,
                RootFolderServerRelativeUrl: urlInfo.RootFolder.ServerRelativeUrl,
                RootFolderUniqueId: urlInfo.RootFolder.UniqueId,
            },
            ParentWeb: {
                Id: urlInfo.ParentWeb.Id,
                ServerRelativePath: urlInfo.ParentWeb.ServerRelativePath,
                ServerRelativeUrl: urlInfo.ParentWeb.ServerRelativeUrl,
                Url: urlInfo.ParentWeb.Url,
            },
        };
    }
}
const List = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__["spInvokableFactory"])(_List);
/**
 * Enum representing the options of the RenderOptions property on IRenderListDataParameters interface
 */
var RenderListDataOptions;
(function (RenderListDataOptions) {
    RenderListDataOptions[RenderListDataOptions["None"] = 0] = "None";
    RenderListDataOptions[RenderListDataOptions["ContextInfo"] = 1] = "ContextInfo";
    RenderListDataOptions[RenderListDataOptions["ListData"] = 2] = "ListData";
    RenderListDataOptions[RenderListDataOptions["ListSchema"] = 4] = "ListSchema";
    RenderListDataOptions[RenderListDataOptions["MenuView"] = 8] = "MenuView";
    RenderListDataOptions[RenderListDataOptions["ListContentType"] = 16] = "ListContentType";
    /**
     * The returned list will have a FileSystemItemId field on each item if possible.
     */
    RenderListDataOptions[RenderListDataOptions["FileSystemItemId"] = 32] = "FileSystemItemId";
    /**
     * Returns the client form schema to add and edit items.
     */
    RenderListDataOptions[RenderListDataOptions["ClientFormSchema"] = 64] = "ClientFormSchema";
    /**
     * Returns QuickLaunch navigation nodes.
     */
    RenderListDataOptions[RenderListDataOptions["QuickLaunch"] = 128] = "QuickLaunch";
    /**
     * Returns Spotlight rendering information.
     */
    RenderListDataOptions[RenderListDataOptions["Spotlight"] = 256] = "Spotlight";
    /**
     * Returns Visualization rendering information.
     */
    RenderListDataOptions[RenderListDataOptions["Visualization"] = 512] = "Visualization";
    /**
     * Returns view XML and other information about the current view.
     */
    RenderListDataOptions[RenderListDataOptions["ViewMetadata"] = 1024] = "ViewMetadata";
    /**
     * Prevents AutoHyperlink from being run on text fields in this query.
     */
    RenderListDataOptions[RenderListDataOptions["DisableAutoHyperlink"] = 2048] = "DisableAutoHyperlink";
    /**
     * Enables urls pointing to Media TA service, such as .thumbnailUrl, .videoManifestUrl, .pdfConversionUrls.
     */
    RenderListDataOptions[RenderListDataOptions["EnableMediaTAUrls"] = 4096] = "EnableMediaTAUrls";
    /**
     * Return Parant folder information.
     */
    RenderListDataOptions[RenderListDataOptions["ParentInfo"] = 8192] = "ParentInfo";
    /**
     * Return Page context info for the current list being rendered.
     */
    RenderListDataOptions[RenderListDataOptions["PageContextInfo"] = 16384] = "PageContextInfo";
    /**
     * Return client-side component manifest information associated with the list.
     */
    RenderListDataOptions[RenderListDataOptions["ClientSideComponentManifest"] = 32768] = "ClientSideComponentManifest";
    /**
     * Return all content-types available on the list.
     */
    RenderListDataOptions[RenderListDataOptions["ListAvailableContentTypes"] = 65536] = "ListAvailableContentTypes";
    /**
      * Return the order of items in the new-item menu.
      */
    RenderListDataOptions[RenderListDataOptions["FolderContentTypeOrder"] = 131072] = "FolderContentTypeOrder";
    /**
     * Return information to initialize Grid for quick edit.
     */
    RenderListDataOptions[RenderListDataOptions["GridInitInfo"] = 262144] = "GridInitInfo";
    /**
     * Indicator if the vroom API of the SPItemUrl returned in MediaTAUrlGenerator should use site url as host.
     */
    RenderListDataOptions[RenderListDataOptions["SiteUrlAsMediaTASPItemHost"] = 524288] = "SiteUrlAsMediaTASPItemHost";
    /**
     * Return the files representing mount points in the list.
     */
    RenderListDataOptions[RenderListDataOptions["AddToOneDrive"] = 1048576] = "AddToOneDrive";
    /**
     * Return SPFX CustomAction.
     */
    RenderListDataOptions[RenderListDataOptions["SPFXCustomActions"] = 2097152] = "SPFXCustomActions";
    /**
     * Do not return non-SPFX CustomAction.
     */
    RenderListDataOptions[RenderListDataOptions["CustomActions"] = 4194304] = "CustomActions";
})(RenderListDataOptions || (RenderListDataOptions = {}));
/**
 * Determines the display mode of the given control or view
 */
var ControlMode;
(function (ControlMode) {
    ControlMode[ControlMode["Display"] = 1] = "Display";
    ControlMode[ControlMode["Edit"] = 2] = "Edit";
    ControlMode[ControlMode["New"] = 3] = "New";
})(ControlMode || (ControlMode = {}));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "iB+0":
/*!*************************************************************************!*\
  !*** ./lib/webparts/masterPageRow2/components/QuickLinks/QuickLinks.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pnp_sp_webs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/sp/webs */ "6k7F");
/* harmony import */ var _pnp_sp_folders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/sp/folders */ "0MvI");
/* harmony import */ var _QuickLinks_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QuickLinks.scss */ "JMvT");
// import { SPFI } from '@pnp/sp';

// import { getSP } from '../pnpConfig'



var QuickLinks = function (props) {
    var arr = [];
    arr = props.data;
    console.log(arr);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, arr === null || arr === void 0 ? void 0 : arr.map(function (x) {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row2container__part2__item" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: 'actualLink', href: x.Url },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "linkBody" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "linkIcon" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: x.Icon })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "linkTitle" }, x.Title)))));
        // console.log(x.Title)
    })));
};
/* harmony default export */ __webpack_exports__["default"] = (QuickLinks);


/***/ }),

/***/ "lYrR":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/items/index.js ***!
  \*********************************************/
/*! exports provided: Item, Items, ItemVersion, ItemVersions, PagedItemCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.js */ "NTTg");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "3DT9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return _types_js__WEBPACK_IMPORTED_MODULE_1__["Item"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Items", function() { return _types_js__WEBPACK_IMPORTED_MODULE_1__["Items"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemVersion", function() { return _types_js__WEBPACK_IMPORTED_MODULE_1__["ItemVersion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemVersions", function() { return _types_js__WEBPACK_IMPORTED_MODULE_1__["ItemVersions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PagedItemCollection", function() { return _types_js__WEBPACK_IMPORTED_MODULE_1__["PagedItemCollection"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "nikm":
/*!*****************************************************!*\
  !*** ./node_modules/@pnp/sp/behaviors/telemetry.js ***!
  \*****************************************************/
/*! exports provided: Telemetry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Telemetry", function() { return Telemetry; });
function Telemetry() {
    return (instance) => {
        instance.on.pre(async function (url, init, result) {
            let clientTag = "PnPCoreJS:3.12.1:";
            // make our best guess based on url to the method called
            const { pathname } = new URL(url);
            // remove anything before the _api as that is potentially PII and we don't care, just want to get the called path to the REST API
            // and we want to modify any (*) calls at the end such as items(3) and items(344) so we just track "items()"
            clientTag += pathname
                .substring(pathname.indexOf("_api/") + 5)
                .split("/")
                .map((value, index, arr) => index === arr.length - 1 ? value.replace(/\(.*?$/i, "()") : value[0]).join(".");
            if (clientTag.length > 32) {
                clientTag = clientTag.substring(0, 32);
            }
            this.log(`Request Tag: ${clientTag}`, 0);
            init.headers = { ...init.headers, ["X-ClientService-ClientTag"]: clientTag };
            return [url, init, result];
        });
        return instance;
    };
}
//# sourceMappingURL=telemetry.js.map

/***/ }),

/***/ "pAcn":
/*!******************************************!*\
  !*** ./node_modules/@pnp/sp/batching.js ***!
  \******************************************/
/*! exports provided: createBatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBatch", function() { return createBatch; });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operations.js */ "UK2s");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spqueryable.js */ "F4qD");
/* harmony import */ var _fi_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fi.js */ "v6VW");
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./webs/types.js */ "dVsc");






_fi_js__WEBPACK_IMPORTED_MODULE_4__["SPFI"].prototype.batched = function (props) {
    const batched = Object(_fi_js__WEBPACK_IMPORTED_MODULE_4__["spfi"])(this);
    const [behavior, execute] = createBatch(batched._root, props);
    batched.using(behavior);
    return [batched, execute];
};
_webs_types_js__WEBPACK_IMPORTED_MODULE_5__["_Web"].prototype.batched = function (props) {
    const batched = Object(_webs_types_js__WEBPACK_IMPORTED_MODULE_5__["Web"])(this);
    const [behavior, execute] = createBatch(batched, props);
    batched.using(behavior);
    return [batched, execute];
};
/**
 * Tracks on a batched instance that registration is complete (the child request has gotten to the send moment and the request is included in the batch)
 */
const RegistrationCompleteSym = Symbol.for("batch_registration");
/**
 * Tracks on a batched instance that the child request timeline lifecycle is complete (called in child.dispose)
 */
const RequestCompleteSym = Symbol.for("batch_request");
/**
 * Special batch parsing behavior used to convert the batch response text into a set of Response objects for each request
 * @returns A parser behavior
 */
function BatchParse() {
    return Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__["parseBinderWithErrorCheck"])(async (response) => {
        const text = await response.text();
        return parseResponse(text);
    });
}
/**
 * Internal class used to execute the batch request through the timeline lifecycle
 */
class BatchQueryable extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__["_SPQueryable"] {
    constructor(base, requestBaseUrl = base.toUrl().replace(/_api[\\|/].*$/i, "")) {
        super(requestBaseUrl, "_api/$batch");
        this.requestBaseUrl = requestBaseUrl;
        // this will copy over the current observables from the base associated with this batch
        // this will replace any other parsing present
        this.using(Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["CopyFrom"])(base, "replace"), BatchParse());
        this.on.dispose(() => {
            // there is a code path where you may invoke a batch, say on items.add, whose return
            // is an object like { data: any, item: IItem }. The expectation from v1 on is `item` in that object
            // is immediately usable to make additional queries. Without this step when that IItem instance is
            // created using "this.getById" within IITems.add all of the current observers of "this" are
            // linked to the IItem instance created (expected), BUT they will be the set of observers setup
            // to handle the batch, meaning invoking `item` will result in a half batched call that
            // doesn't really work. To deliver the expected functionality we "reset" the
            // observers using the original instance, mimicing the behavior had
            // the IItem been created from that base without a batch involved. We use CopyFrom to ensure
            // that we maintain the references to the InternalResolve and InternalReject events through
            // the end of this timeline lifecycle. This works because CopyFrom by design uses Object.keys
            // which ignores symbol properties.
            base.using(Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["CopyFrom"])(this, "replace", (k) => /(auth|send|init)/i.test(k)));
        });
    }
}
/**
 * Creates a batched version of the supplied base, meaning that all chained fluent operations from the new base are part of the batch
 *
 * @param base The base from which to initialize the batch
 * @param props Any properties used to initialize the batch functionality
 * @returns A tuple of [behavior used to assign objects to the batch, the execute function used to resolve the batch requests]
 */
function createBatch(base, props) {
    const registrationPromises = [];
    const completePromises = [];
    const requests = [];
    const batchId = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["getGUID"])();
    const batchQuery = new BatchQueryable(base);
    const { headersCopyPattern } = {
        headersCopyPattern: /Accept|Content-Type|IF-Match/i,
        ...props,
    };
    const execute = async () => {
        await Promise.all(registrationPromises);
        if (requests.length < 1) {
            // even if we have no requests we need to await the complete promises to ensure
            // that execute only resolves AFTER every child request disposes #2457
            // this likely means caching is being used, we returned values for all child requests from the cache
            return Promise.all(completePromises).then(() => void (0));
        }
        const batchBody = [];
        let currentChangeSetId = "";
        for (let i = 0; i < requests.length; i++) {
            const [, url, init] = requests[i];
            if (init.method === "GET") {
                if (currentChangeSetId.length > 0) {
                    // end an existing change set
                    batchBody.push(`--changeset_${currentChangeSetId}--\n\n`);
                    currentChangeSetId = "";
                }
                batchBody.push(`--batch_${batchId}\n`);
            }
            else {
                if (currentChangeSetId.length < 1) {
                    // start new change set
                    currentChangeSetId = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["getGUID"])();
                    batchBody.push(`--batch_${batchId}\n`);
                    batchBody.push(`Content-Type: multipart/mixed; boundary="changeset_${currentChangeSetId}"\n\n`);
                }
                batchBody.push(`--changeset_${currentChangeSetId}\n`);
            }
            // common batch part prefix
            batchBody.push("Content-Type: application/http\n");
            batchBody.push("Content-Transfer-Encoding: binary\n\n");
            // these are the per-request headers
            const headers = new Headers(init.headers);
            // this is the url of the individual request within the batch
            const reqUrl = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["isUrlAbsolute"])(url) ? url : Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["combine"])(batchQuery.requestBaseUrl, url);
            if (init.method !== "GET") {
                let method = init.method;
                if (headers.has("X-HTTP-Method")) {
                    method = headers.get("X-HTTP-Method");
                    headers.delete("X-HTTP-Method");
                }
                batchBody.push(`${method} ${reqUrl} HTTP/1.1\n`);
            }
            else {
                batchBody.push(`${init.method} ${reqUrl} HTTP/1.1\n`);
            }
            // lastly we apply any default headers we need that may not exist
            if (!headers.has("Accept")) {
                headers.append("Accept", "application/json");
            }
            if (!headers.has("Content-Type")) {
                headers.append("Content-Type", "application/json;charset=utf-8");
            }
            // write headers into batch body
            headers.forEach((value, name) => {
                if (headersCopyPattern.test(name)) {
                    batchBody.push(`${name}: ${value}\n`);
                }
            });
            batchBody.push("\n");
            if (init.body) {
                batchBody.push(`${init.body}\n\n`);
            }
        }
        if (currentChangeSetId.length > 0) {
            // Close the changeset
            batchBody.push(`--changeset_${currentChangeSetId}--\n\n`);
            currentChangeSetId = "";
        }
        batchBody.push(`--batch_${batchId}--\n`);
        // we need to set our own headers here
        batchQuery.using(Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__["InjectHeaders"])({
            "Content-Type": `multipart/mixed; boundary=batch_${batchId}`,
        }));
        const responses = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_2__["spPost"])(batchQuery, { body: batchBody.join("") });
        if (responses.length !== requests.length) {
            throw Error("Could not properly parse responses to match requests in batch.");
        }
        return new Promise((res, rej) => {
            try {
                for (let index = 0; index < responses.length; index++) {
                    const [, , , resolve, reject] = requests[index];
                    try {
                        resolve(responses[index]);
                    }
                    catch (e) {
                        reject(e);
                    }
                }
                // this small delay allows the promises to resolve correctly in order by dropping this resolve behind
                // the other work in the event loop. Feels hacky, but it works so 🤷
                setTimeout(res, 0);
            }
            catch (e) {
                setTimeout(() => rej(e), 0);
            }
        }).then(() => Promise.all(completePromises)).then(() => void (0));
    };
    const register = (instance) => {
        instance.on.init(function () {
            if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["isFunc"])(this[RegistrationCompleteSym])) {
                throw Error("This instance is already part of a batch. Please review the docs at https://pnp.github.io/pnpjs/concepts/batching#reuse.");
            }
            // we need to ensure we wait to start execute until all our batch children hit the .send method to be fully registered
            registrationPromises.push(new Promise((resolve) => {
                this[RegistrationCompleteSym] = resolve;
            }));
            return this;
        });
        // the entire request will be auth'd - we don't need to run this for each batch request
        instance.on.auth.clear();
        // we replace the send function with our batching logic
        instance.on.send.replace(async function (url, init) {
            // this is the promise that Queryable will see returned from .emit.send
            const promise = new Promise((resolve, reject) => {
                // add the request information into the batch
                requests.push([this, url.toString(), init, resolve, reject]);
            });
            this.log(`[batch:${batchId}] (${(new Date()).getTime()}) Adding request ${init.method} ${url.toString()} to batch.`, 0);
            // we need to ensure we wait to resolve execute until all our batch children have fully completed their request timelines
            completePromises.push(new Promise((resolve) => {
                this[RequestCompleteSym] = resolve;
            }));
            // indicate that registration of this request is complete
            this[RegistrationCompleteSym]();
            return promise;
        });
        instance.on.dispose(function () {
            if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["isFunc"])(this[RegistrationCompleteSym])) {
                // if this request is in a batch and caching is in play we need to resolve the registration promises to unblock processing of the batch
                // because the request will never reach the "send" moment as the result is returned from "pre"
                this[RegistrationCompleteSym]();
                // remove the symbol props we added for good hygene
                delete this[RegistrationCompleteSym];
            }
            if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["isFunc"])(this[RequestCompleteSym])) {
                // let things know we are done with this request
                this[RequestCompleteSym]();
                delete this[RequestCompleteSym];
                // there is a code path where you may invoke a batch, say on items.add, whose return
                // is an object like { data: any, item: IItem }. The expectation from v1 on is `item` in that object
                // is immediately usable to make additional queries. Without this step when that IItem instance is
                // created using "this.getById" within IITems.add all of the current observers of "this" are
                // linked to the IItem instance created (expected), BUT they will be the set of observers setup
                // to handle the batch, meaning invoking `item` will result in a half batched call that
                // doesn't really work. To deliver the expected functionality we "reset" the
                // observers using the original instance, mimicing the behavior had
                // the IItem been created from that base without a batch involved. We use CopyFrom to ensure
                // that we maintain the references to the InternalResolve and InternalReject events through
                // the end of this timeline lifecycle. This works because CopyFrom by design uses Object.keys
                // which ignores symbol properties.
                this.using(Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["CopyFrom"])(batchQuery, "replace", (k) => /(auth|send|init|dispose)/i.test(k)));
            }
        });
        return instance;
    };
    return [register, execute];
}
/**
 * Parses the text body returned by the server from a batch request
 *
 * @param body String body from the server response
 * @returns Parsed response objects
 */
function parseResponse(body) {
    const responses = [];
    const header = "--batchresponse_";
    // Ex. "HTTP/1.1 500 Internal Server Error"
    const statusRegExp = new RegExp("^HTTP/[0-9.]+ +([0-9]+) +(.*)", "i");
    const lines = body.split("\n");
    let state = "batch";
    let status;
    let statusText;
    let headers = {};
    const bodyReader = [];
    for (let i = 0; i < lines.length; ++i) {
        let line = lines[i];
        switch (state) {
            case "batch":
                if (line.substring(0, header.length) === header) {
                    state = "batchHeaders";
                }
                else {
                    if (line.trim() !== "") {
                        throw Error(`Invalid response, line ${i}`);
                    }
                }
                break;
            case "batchHeaders":
                if (line.trim() === "") {
                    state = "status";
                }
                break;
            case "status": {
                const parts = statusRegExp.exec(line);
                if (parts.length !== 3) {
                    throw Error(`Invalid status, line ${i}`);
                }
                status = parseInt(parts[1], 10);
                statusText = parts[2];
                state = "statusHeaders";
                break;
            }
            case "statusHeaders":
                if (line.trim() === "") {
                    state = "body";
                }
                else {
                    const headerParts = line.split(":");
                    if ((headerParts === null || headerParts === void 0 ? void 0 : headerParts.length) === 2) {
                        headers[headerParts[0].trim()] = headerParts[1].trim();
                    }
                }
                break;
            case "body":
                // reset the body reader
                bodyReader.length = 0;
                // this allows us to capture batch bodies that are returned as multi-line (renderListDataAsStream, #2454)
                while (line.substring(0, header.length) !== header) {
                    bodyReader.push(line);
                    line = lines[++i];
                }
                // because we have read the closing --batchresponse_ line, we need to move the line pointer back one
                // so that the logic works as expected either to get the next result or end processing
                i--;
                responses.push(new Response(status === 204 ? null : bodyReader.join(""), { status, statusText, headers }));
                state = "batch";
                headers = {};
                break;
        }
    }
    if (state !== "status") {
        throw Error("Unexpected end of input");
    }
    return responses;
}
//# sourceMappingURL=batching.js.map

/***/ }),

/***/ "qL0N":
/*!**********************************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/caching-pessimistic.js ***!
  \**********************************************************************/
/*! exports provided: CachingPessimisticRefresh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CachingPessimisticRefresh", function() { return CachingPessimisticRefresh; });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _queryable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../queryable.js */ "Ww49");
/* harmony import */ var _caching_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./caching.js */ "VxMn");



/**
 * Pessimistic Caching Behavior
 * Always returns the cached value if one exists but asynchronously executes the call and updates the cache.
 * If a expireFunc is included then the cache update only happens if the cache has expired.
 *
 * @param store Use local or session storage
 * @param keyFactory: a function that returns the key for the cache value, if not provided a default hash of the url will be used
 * @param expireFunc: a function that returns a date of expiration for the cache value, if not provided the cache never expires but is always updated.
 */
function CachingPessimisticRefresh(props) {
    return (instance) => {
        const pre = async function (url, init, result) {
            const [shouldCache, getCachedValue, setCachedValue] = Object(_caching_js__WEBPACK_IMPORTED_MODULE_2__["bindCachingCore"])(url, init, props);
            if (!shouldCache) {
                return [url, init, result];
            }
            const cached = getCachedValue();
            if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["objectDefinedNotNull"])(cached)) {
                // set our result
                result = cached;
                setTimeout(async () => {
                    const q = new _queryable_js__WEBPACK_IMPORTED_MODULE_1__["Queryable"](this);
                    const a = q.on.pre.toArray();
                    q.on.pre.clear();
                    // filter out this pre handler from the original queryable as we don't want to re-run it
                    a.filter(v => v !== pre).map(v => q.on.pre(v));
                    // in this case the init should contain the correct "method"
                    const value = await q(init);
                    setCachedValue(value);
                }, 0);
            }
            else {
                // register the post handler to cache the value as there is not one already in the cache
                // and we need to run this request as normal
                this.on.post(Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["noInherit"])(async function (url, result) {
                    setCachedValue(result);
                    return [url, result];
                }));
            }
            return [url, init, result];
        };
        instance.on.pre(pre);
        return instance;
    };
}
//# sourceMappingURL=caching-pessimistic.js.map

/***/ }),

/***/ "qNel":
/*!*******************************************************!*\
  !*** ./node_modules/@pnp/core/behaviors/copy-from.js ***!
  \*******************************************************/
/*! exports provided: CopyFrom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyFrom", function() { return CopyFrom; });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util.js */ "NuLX");
/* harmony import */ var _timeline_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../timeline.js */ "4kGv");


/**
 * Behavior that will copy all the observers in the source timeline and apply it to the incoming instance
 *
 * @param source The source instance from which we will copy the observers
 * @param behavior replace = observers are cleared before adding, append preserves any observers already present
 * @param filter If provided filters the moments from which the observers are copied. It should return true for each moment to include.
 * @returns The mutated this
 */
function CopyFrom(source, behavior = "append", filter) {
    return (instance) => {
        return Reflect.apply(copyObservers, instance, [source, behavior, filter]);
    };
}
/**
 * Function with implied this allows us to access protected members
 *
 * @param this The timeline whose observers we will copy
 * @param source The source instance from which we will copy the observers
 * @param behavior replace = observers are cleared before adding, append preserves any observers already present
 * @returns The mutated this
 */
function copyObservers(source, behavior, filter) {
    if (!Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["objectDefinedNotNull"])(source) || !Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["objectDefinedNotNull"])(source.observers)) {
        return this;
    }
    if (!Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["isFunc"])(filter)) {
        filter = () => true;
    }
    const clonedSource = Object(_timeline_js__WEBPACK_IMPORTED_MODULE_1__["cloneObserverCollection"])(source.observers);
    const keys = Object.keys(clonedSource).filter(filter);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const on = this.on[key];
        if (behavior === "replace") {
            on.clear();
        }
        const momentObservers = clonedSource[key];
        momentObservers.forEach(v => on(v));
    }
    return this;
}
//# sourceMappingURL=copy-from.js.map

/***/ }),

/***/ "qZw7":
/*!****************************************************!*\
  !*** ./node_modules/@pnp/sp/behaviors/defaults.js ***!
  \****************************************************/
/*! exports provided: DefaultInit, DefaultHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultInit", function() { return DefaultInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultHeaders", function() { return DefaultHeaders; });
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _telemetry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./telemetry.js */ "nikm");


function DefaultInit() {
    return (instance) => {
        instance.on.pre(async (url, init, result) => {
            init.cache = "no-cache";
            init.credentials = "same-origin";
            return [url, init, result];
        });
        instance.using(Object(_telemetry_js__WEBPACK_IMPORTED_MODULE_1__["Telemetry"])(), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__["RejectOnError"])(), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__["ResolveOnData"])());
        return instance;
    };
}
function DefaultHeaders() {
    return (instance) => {
        instance
            .using(Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__["InjectHeaders"])({
            "Accept": "application/json",
            "Content-Type": "application/json;charset=utf-8",
        }));
        return instance;
    };
}
//# sourceMappingURL=defaults.js.map

/***/ }),

/***/ "rOeR":
/*!************************************************************!*\
  !*** ./node_modules/react-slideshow-image/dist/styles.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../@microsoft/spfx-heft-plugins/node_modules/css-loader/dist/cjs.js!../../postcss-loader/src??postcss!./styles.css */ "WjcV");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js */ "ruv1");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "ruv1":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitStyles = exports.detokenize = exports.clearStyles = exports.loadTheme = exports.flush = exports.configureRunMode = exports.configureLoadStyles = exports.loadStyles = void 0;
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = typeof window === 'undefined' ? global : window; // eslint-disable-line @typescript-eslint/no-explicit-any
// Nonce string to inject into script tag if one provided. This is used in CSP (Content Security Policy).
var _styleNonce = _root && _root.CSPSettings && _root.CSPSettings.nonce;
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
var now = function () {
    return typeof performance !== 'undefined' && !!performance.now ? performance.now() : Date.now();
};
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign(__assign({}, state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* Mode.sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign(__assign({}, state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* Mode.async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
exports.loadStyles = loadStyles;
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
exports.configureLoadStyles = configureLoadStyles;
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
exports.configureRunMode = configureRunMode;
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
exports.flush = flush;
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
exports.loadTheme = loadTheme;
/**
 * Clear already registered style elements and style records in theme_State object
 * @param option - specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* ClearStyleOptions.all */; }
    if (option === 3 /* ClearStyleOptions.all */ || option === 2 /* ClearStyleOptions.onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* ClearStyleOptions.all */ || option === 1 /* ClearStyleOptions.onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
exports.clearStyles = clearStyles;
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* ClearStyleOptions.onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
exports.detokenize = detokenize;
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme &&
                !themedValue &&
                console &&
                !(themeSlot in theme) &&
                "boolean" !== 'undefined' &&
                true) {
                console.warn("Theming value not provided for \"".concat(themeSlot, "\". Falling back to \"").concat(defaultValue, "\"."));
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0;
        while ((tokenMatch = _themeTokenRegex.exec(styles))) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
exports.splitStyles = splitStyles;
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    if (typeof document === 'undefined') {
        return;
    }
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.setAttribute('data-load-themed-styles', 'true');
    if (_styleNonce) {
        styleElement.setAttribute('nonce', _styleNonce);
    }
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var ev = document.createEvent('HTMLEvents');
    ev.initEvent('styleinsert', true /* bubbleEvent */, false /* cancelable */);
    ev.args = {
        newStyle: styleElement
    };
    document.dispatchEvent(ev);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../sp-build-web/node_modules/webpack/buildin/global.js */ "vicT")))

/***/ }),

/***/ "rv7W":
/*!**************************************************************************!*\
  !*** ./lib/webparts/masterPageRow2/components/QuickLinks/QuickLinks.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../node_modules/@microsoft/spfx-heft-plugins/node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/src??postcss!./QuickLinks.css */ "wqax");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js */ "ruv1");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "t9SU":
/*!**********************************************!*\
  !*** ./node_modules/@pnp/core/extendable.js ***!
  \**********************************************/
/*! exports provided: extendable, extend, extendFactory, disableExtensions, enableExtensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendable", function() { return extendable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendFactory", function() { return extendFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableExtensions", function() { return disableExtensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableExtensions", function() { return enableExtensions; });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "NuLX");

let _enableExtensions = false;
const ObjExtensionsSym = Symbol.for("PnPExt");
const factoryExtensions = new Map();
/**
 * Decorator factory wrapping any tagged class in the extension proxy, enabling the use of object extensions
 *
 * @description MUST be applied last (i.e. be the first decorator in the list top to bottom applied to a class)
 *
 * @returns Decorator implementation
 */
function extendable() {
    return (target) => {
        return new Proxy(target, {
            construct(clz, args, newTarget) {
                let r = Reflect.construct(clz, args, newTarget);
                // this block handles the factory function extensions by picking
                // them off the factory and applying them to the created object
                const proto = Reflect.getPrototypeOf(target);
                if (Reflect.has(proto, ObjExtensionsSym)) {
                    const extensions = factoryExtensions.get(Reflect.get(proto, ObjExtensionsSym));
                    if (extensions) {
                        r = extend(r, extensions);
                    }
                }
                const proxied = new Proxy(r, {
                    apply: (target, _thisArg, argArray) => {
                        // eslint-disable-next-line @typescript-eslint/ban-types
                        return extensionOrDefault("apply", (...a) => Reflect.apply(...a), target, proxied, argArray);
                    },
                    get: (target, p, receiver) => {
                        // eslint-disable-next-line @typescript-eslint/ban-types
                        return extensionOrDefault("get", (...a) => Reflect.get(...a), target, p, receiver);
                    },
                    has: (target, p) => {
                        // eslint-disable-next-line @typescript-eslint/ban-types
                        return extensionOrDefault("has", (...a) => Reflect.has(...a), target, p);
                    },
                    set: (target, p, value, receiver) => {
                        // eslint-disable-next-line @typescript-eslint/ban-types
                        return extensionOrDefault("set", (...a) => Reflect.set(...a), target, p, value, receiver);
                    },
                });
                return proxied;
            },
        });
    };
}
/**
 * Applies the supplied extensions to a single instance
 *
 * @param target Object to which extensions are applied
 * @param extensions Extensions to apply
 */
function extend(target, extensions) {
    _enableExtensions = true;
    if (!Reflect.has(target, ObjExtensionsSym)) {
        Reflect.defineProperty(target, ObjExtensionsSym, {
            writable: true,
            value: [],
        });
    }
    extendCol(Reflect.get(target, ObjExtensionsSym), extensions);
    return target;
}
/**
 * Allows applying extensions to all instances created from the supplied factory
 *
 * @param factory The Invokable Factory method to extend
 * @param extensions Extensions to apply
 */
function extendFactory(factory, extensions) {
    _enableExtensions = true;
    // factoryExtensions
    const proto = Reflect.getPrototypeOf(factory);
    if (proto) {
        if (!Reflect.has(proto, ObjExtensionsSym)) {
            Reflect.defineProperty(proto, ObjExtensionsSym, {
                value: Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getGUID"])(),
            });
        }
        const key = proto[ObjExtensionsSym];
        if (!factoryExtensions.has(key)) {
            factoryExtensions.set(key, []);
        }
        extendCol(factoryExtensions.get(key), extensions);
    }
}
function extendCol(a, e) {
    if (Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["isArray"])(e)) {
        a.push(...e);
    }
    else {
        a.push(e);
    }
}
/**
 * Disables all extensions
 */
const disableExtensions = () => {
    _enableExtensions = false;
};
/**
 * Enables all extensions
 */
const enableExtensions = () => {
    _enableExtensions = true;
};
/**
 * Executes the extended functionality if present, or the default action
 *
 * @param op Current operation type
 * @param or The default non-extended functionality
 * @param target The current "this" to which the current call applies
 * @param rest Any arguments required for the called method
 * @returns Whatever the underlying extension or method returns
 */
function extensionOrDefault(op, or, target, ...rest) {
    if (_enableExtensions && Reflect.has(target, ObjExtensionsSym)) {
        const extensions = [...Reflect.get(target, ObjExtensionsSym)];
        let result = undefined;
        for (let i = 0; i < extensions.length; i++) {
            const extension = extensions[i];
            if (Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["isFunc"])(extension)) {
                // this extension is a function which we call
                result = extension(op, target, ...rest);
            }
            else if (op === "get" && Reflect.has(extension, rest[0])) {
                // this extension is a named extension meaning we are adding/overriding a specific method/property
                result = Reflect.get(extension, rest[0], target);
            }
            else if (Reflect.has(extension, op)) {
                // this extension is a ProxyHandler that has a handler defined for {op} so we pass control and see if we get a result
                result = Reflect.get(extension, op)(target, ...rest);
            }
            if (typeof result !== "undefined") {
                // if a extension returned a result, we return that
                // this means that this extension overrides any other extensions and no more are executed
                // first extension in the list to return "wins"
                return result;
            }
        }
    }
    return or(target, ...rest);
}
//# sourceMappingURL=extendable.js.map

/***/ }),

/***/ "tCQJ":
/*!***************************************!*\
  !*** ./node_modules/@pnp/sp/types.js ***!
  \***************************************/
/*! exports provided: emptyGuid, PrincipalType, PrincipalSource, PageType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyGuid", function() { return emptyGuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalType", function() { return PrincipalType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalSource", function() { return PrincipalSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageType", function() { return PageType; });
// reference: https://msdn.microsoft.com/en-us/library/office/dn600183.aspx
const emptyGuid = "00000000-0000-0000-0000-000000000000";
/**
 * Specifies the type of a principal.
 */
var PrincipalType;
(function (PrincipalType) {
    /**
     * Enumeration whose value specifies no principal type.
     */
    PrincipalType[PrincipalType["None"] = 0] = "None";
    /**
     * Enumeration whose value specifies a user as the principal type.
     */
    PrincipalType[PrincipalType["User"] = 1] = "User";
    /**
     * Enumeration whose value specifies a distribution list as the principal type.
     */
    PrincipalType[PrincipalType["DistributionList"] = 2] = "DistributionList";
    /**
     * Enumeration whose value specifies a security group as the principal type.
     */
    PrincipalType[PrincipalType["SecurityGroup"] = 4] = "SecurityGroup";
    /**
     * Enumeration whose value specifies a group as the principal type.
     */
    PrincipalType[PrincipalType["SharePointGroup"] = 8] = "SharePointGroup";
    /**
     * Enumeration whose value specifies all principal types.
     */
    // eslint-disable-next-line no-bitwise
    PrincipalType[PrincipalType["All"] = 15] = "All";
})(PrincipalType || (PrincipalType = {}));
/**
 * Specifies the source of a principal.
 */
var PrincipalSource;
(function (PrincipalSource) {
    /**
     * Enumeration whose value specifies no principal source.
     */
    PrincipalSource[PrincipalSource["None"] = 0] = "None";
    /**
     * Enumeration whose value specifies user information list as the principal source.
     */
    PrincipalSource[PrincipalSource["UserInfoList"] = 1] = "UserInfoList";
    /**
     * Enumeration whose value specifies Active Directory as the principal source.
     */
    PrincipalSource[PrincipalSource["Windows"] = 2] = "Windows";
    /**
     * Enumeration whose value specifies the current membership provider as the principal source.
     */
    PrincipalSource[PrincipalSource["MembershipProvider"] = 4] = "MembershipProvider";
    /**
     * Enumeration whose value specifies the current role provider as the principal source.
     */
    PrincipalSource[PrincipalSource["RoleProvider"] = 8] = "RoleProvider";
    /**
     * Enumeration whose value specifies all principal sources.
     */
    // eslint-disable-next-line no-bitwise
    PrincipalSource[PrincipalSource["All"] = 15] = "All";
})(PrincipalSource || (PrincipalSource = {}));
var PageType;
(function (PageType) {
    PageType[PageType["Invalid"] = -1] = "Invalid";
    PageType[PageType["DefaultView"] = 0] = "DefaultView";
    PageType[PageType["NormalView"] = 1] = "NormalView";
    PageType[PageType["DialogView"] = 2] = "DialogView";
    PageType[PageType["View"] = 3] = "View";
    PageType[PageType["DisplayForm"] = 4] = "DisplayForm";
    PageType[PageType["DisplayFormDialog"] = 5] = "DisplayFormDialog";
    PageType[PageType["EditForm"] = 6] = "EditForm";
    PageType[PageType["EditFormDialog"] = 7] = "EditFormDialog";
    PageType[PageType["NewForm"] = 8] = "NewForm";
    PageType[PageType["NewFormDialog"] = 9] = "NewFormDialog";
    PageType[PageType["SolutionForm"] = 10] = "SolutionForm";
    PageType[PageType["PAGE_MAXITEMS"] = 11] = "PAGE_MAXITEMS";
})(PageType || (PageType = {}));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "tGZ3":
/*!************************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/resolvers.js ***!
  \************************************************************/
/*! exports provided: ResolveOnData, RejectOnError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolveOnData", function() { return ResolveOnData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectOnError", function() { return RejectOnError; });
function ResolveOnData() {
    return (instance) => {
        instance.on.data(function (data) {
            this.emit[this.InternalResolve](data);
        });
        return instance;
    };
}
function RejectOnError() {
    return (instance) => {
        instance.on.error(function (err) {
            this.emit[this.InternalReject](err);
        });
        return instance;
    };
}
//# sourceMappingURL=resolvers.js.map

/***/ }),

/***/ "tMxi":
/*!******************************************************************************!*\
  !*** ./node_modules/react-slideshow-image/dist/react-slideshow-image.esm.js ***!
  \******************************************************************************/
/*! exports provided: Fade, Slide, Zoom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fade", function() { return Fade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slide", function() { return Slide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Zoom", function() { return Zoom; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resize-observer-polyfill */ "bdgK");
/* harmony import */ var _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tweenjs/tween.js */ "IrXD");




function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

var getStartingIndex = function getStartingIndex(children, defaultIndex) {
  if (defaultIndex && defaultIndex < react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.count(children)) {
    return defaultIndex;
  }

  return 0;
};
var getResponsiveSettings = function getResponsiveSettings(wrapperWidth, responsive) {
  if (typeof window !== 'undefined' && Array.isArray(responsive)) {
    return responsive.find(function (each) {
      return each.breakpoint <= wrapperWidth;
    });
  }

  return;
};
var EASING_METHODS = {
  linear: _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_2__["Easing"].Linear.None,
  ease: _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_2__["Easing"].Quadratic.InOut,
  'ease-in': _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_2__["Easing"].Quadratic.In,
  'ease-out': _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_2__["Easing"].Quadratic.Out,
  cubic: _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_2__["Easing"].Cubic.InOut,
  'cubic-in': _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_2__["Easing"].Cubic.In,
  'cubic-out': _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_2__["Easing"].Cubic.Out
};
var getEasing = function getEasing(easeMethod) {
  if (easeMethod) {
    return EASING_METHODS[easeMethod];
  }

  return EASING_METHODS.linear;
};
var showPreviousArrow = function showPreviousArrow(_ref, currentIndex, moveSlides) {
  var prevArrow = _ref.prevArrow,
      infinite = _ref.infinite;
  var isDisabled = currentIndex <= 0 && !infinite;
  var props = {
    'data-type': 'prev',
    'aria-label': 'Previous Slide',
    disabled: isDisabled,
    onClick: moveSlides
  };

  if (prevArrow) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(prevArrow, _extends({
      className: (prevArrow.props.className || '') + " nav " + (isDisabled ? 'disabled' : '')
    }, props));
  }

  var className = "nav default-nav " + (isDisabled ? 'disabled' : '');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", Object.assign({
    type: "button",
    className: className
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
  })));
};
var showNextArrow = function showNextArrow(properties, currentIndex, moveSlides) {
  var nextArrow = properties.nextArrow,
      infinite = properties.infinite,
      children = properties.children;
  var slidesToScroll = 1;

  if ('slidesToScroll' in properties) {
    slidesToScroll = properties.slidesToScroll || 1;
  }

  var isDisabled = currentIndex >= react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.count(children) - slidesToScroll && !infinite;
  var props = {
    'data-type': 'next',
    'aria-label': 'Next Slide',
    disabled: isDisabled,
    onClick: moveSlides
  };

  if (nextArrow) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(nextArrow, _extends({
      className: (nextArrow.props.className || '') + " nav " + (isDisabled ? 'disabled' : '')
    }, props));
  }

  var className = "nav default-nav " + (isDisabled ? 'disabled' : '');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", Object.assign({
    type: "button",
    className: className
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"
  })));
};

var showDefaultIndicator = function showDefaultIndicator(isCurrentPageActive, key, indicatorProps) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: key
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", Object.assign({
    type: "button",
    className: "each-slideshow-indicator " + (isCurrentPageActive ? 'active' : '')
  }, indicatorProps)));
};

var showCustomIndicator = function showCustomIndicator(isCurrentPageActive, key, indicatorProps, eachIndicator) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(eachIndicator, _extends({
    className: eachIndicator.props.className + " " + (isCurrentPageActive ? 'active' : ''),
    key: key
  }, indicatorProps));
};

var showIndicators = function showIndicators(props, currentIndex, navigate, responsiveSettings) {
  var children = props.children,
      indicators = props.indicators;
  var slidesToScroll = 1;

  if (responsiveSettings) {
    slidesToScroll = responsiveSettings == null ? void 0 : responsiveSettings.settings.slidesToScroll;
  } else if ('slidesToScroll' in props) {
    slidesToScroll = props.slidesToScroll || 1;
  }

  var pages = Math.ceil(react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.count(children) / slidesToScroll);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "indicators"
  }, Array.from({
    length: pages
  }, function (_, key) {
    var indicatorProps = {
      'data-key': key,
      'aria-label': "Go to slide " + (key + 1),
      onClick: navigate
    };
    var isCurrentPageActive = Math.floor((currentIndex + slidesToScroll - 1) / slidesToScroll) === key;

    if (typeof indicators === 'function') {
      return showCustomIndicator(isCurrentPageActive, key, indicatorProps, indicators(key));
    }

    return showDefaultIndicator(isCurrentPageActive, key, indicatorProps);
  }));
};

var defaultProps = {
  duration: 5000,
  transitionDuration: 1000,
  defaultIndex: 0,
  infinite: true,
  autoplay: true,
  indicators: false,
  arrows: true,
  pauseOnHover: true,
  easing: 'linear',
  canSwipe: true,
  cssClass: '',
  responsive: []
};

var FadeZoom = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getStartingIndex(props.children, props.defaultIndex)),
      index = _useState[0],
      setIndex = _useState[1];

  var wrapperRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var innerWrapperRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var tweenGroup = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_2__["Group"]());
  var timeout = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var resizeObserver = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var childrenCount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.count(props.children);
  }, [props.children]);
  var applyStyle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (innerWrapperRef.current && wrapperRef.current) {
      var wrapperWidth = wrapperRef.current.clientWidth;
      var fullwidth = wrapperWidth * childrenCount;
      innerWrapperRef.current.style.width = fullwidth + "px";

      for (var _index = 0; _index < innerWrapperRef.current.children.length; _index++) {
        var eachDiv = innerWrapperRef.current.children[_index];

        if (eachDiv) {
          eachDiv.style.width = wrapperWidth + "px";
          eachDiv.style.left = _index * -wrapperWidth + "px";
          eachDiv.style.display = "block";
        }
      }
    }
  }, [wrapperRef, innerWrapperRef, childrenCount]);
  var initResizeObserver = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (wrapperRef.current) {
      resizeObserver.current = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__["default"](function (entries) {
        if (!entries) return;
        applyStyle();
      });
      resizeObserver.current.observe(wrapperRef.current);
    }
  }, [wrapperRef, applyStyle]);
  var play = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    var autoplay = props.autoplay,
        children = props.children,
        duration = props.duration,
        infinite = props.infinite;

    if (autoplay && react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.count(children) > 1 && (infinite || index < react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.count(children) - 1)) {
      timeout.current = setTimeout(moveNext, duration);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [props, index]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    initResizeObserver();
    return function () {
      tweenGroup.current.removeAll();
      clearTimeout(timeout.current);
      removeResizeObserver();
    };
  }, [initResizeObserver, tweenGroup]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    clearTimeout(timeout.current);
    play();
  }, [index, props.autoplay, play]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    applyStyle();
  }, [childrenCount, applyStyle]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"])(ref, function () {
    return {
      goNext: function goNext() {
        moveNext();
      },
      goBack: function goBack() {
        moveBack();
      },
      goTo: function goTo(index, options) {
        if (options != null && options.skipTransition) {
          setIndex(index);
        } else {
          moveTo(index);
        }
      }
    };
  });

  var removeResizeObserver = function removeResizeObserver() {
    if (resizeObserver.current && wrapperRef.current) {
      resizeObserver.current.unobserve(wrapperRef.current);
    }
  };

  var pauseSlides = function pauseSlides() {
    if (props.pauseOnHover) {
      clearTimeout(timeout.current);
    }
  };

  var startSlides = function startSlides() {
    var pauseOnHover = props.pauseOnHover,
        autoplay = props.autoplay,
        duration = props.duration;

    if (pauseOnHover && autoplay) {
      timeout.current = setTimeout(function () {
        return moveNext();
      }, duration);
    }
  };

  var moveNext = function moveNext() {
    var children = props.children,
        infinite = props.infinite;

    if (!infinite && index === react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.count(children) - 1) {
      return;
    }

    transitionSlide((index + 1) % react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.count(children));
  };

  var moveBack = function moveBack() {
    var children = props.children,
        infinite = props.infinite;

    if (!infinite && index === 0) {
      return;
    }

    transitionSlide(index === 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.count(children) - 1 : index - 1);
  };

  var preTransition = function preTransition(event) {
    var currentTarget = event.currentTarget;

    if (currentTarget.dataset.type === 'prev') {
      moveBack();
    } else {
      moveNext();
    }
  };

  var animate = function animate() {
    requestAnimationFrame(animate);
    tweenGroup.current.update();
  };

  var transitionSlide = function transitionSlide(newIndex) {
    var existingTweens = tweenGroup.current.getAll();

    if (!existingTweens.length) {
      var _innerWrapperRef$curr;

      if (!((_innerWrapperRef$curr = innerWrapperRef.current) != null && _innerWrapperRef$curr.children[newIndex])) {
        newIndex = 0;
      }

      clearTimeout(timeout.current);
      var value = {
        opacity: 0,
        scale: 1
      };
      animate();
      var tween = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_2__["Tween"](value, tweenGroup.current).to({
        opacity: 1,
        scale: props.scale
      }, props.transitionDuration).onUpdate(function (value) {
        if (!innerWrapperRef.current) {
          return;
        }

        innerWrapperRef.current.children[newIndex].style.opacity = value.opacity;
        innerWrapperRef.current.children[index].style.opacity = 1 - value.opacity;
        innerWrapperRef.current.children[index].style.transform = "scale(" + value.scale + ")";
      });
      tween.easing(getEasing(props.easing));
      tween.onStart(function () {
        if (typeof props.onStartChange === 'function') {
          props.onStartChange(index, newIndex);
        }
      });
      tween.onComplete(function () {
        if (innerWrapperRef.current) {
          setIndex(newIndex);
          innerWrapperRef.current.children[index].style.transform = "scale(1)";
        }

        if (typeof props.onChange === 'function') {
          props.onChange(index, newIndex);
        }
      });
      tween.start();
    }
  };

  var moveTo = function moveTo(gotoIndex) {
    if (gotoIndex !== index) {
      transitionSlide(gotoIndex);
    }
  };

  var navigate = function navigate(event) {
    var currentTarget = event.currentTarget;

    if (!currentTarget.dataset.key) {
      return;
    }

    if (parseInt(currentTarget.dataset.key) !== index) {
      moveTo(parseInt(currentTarget.dataset.key));
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    dir: "ltr",
    "aria-roledescription": "carousel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "react-slideshow-container " + (props.cssClass || ''),
    onMouseEnter: pauseSlides,
    onMouseOver: pauseSlides,
    onMouseLeave: startSlides
  }, props.arrows && showPreviousArrow(props, index, preTransition), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "react-slideshow-fadezoom-wrapper " + props.cssClass,
    ref: wrapperRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "react-slideshow-fadezoom-images-wrap",
    ref: innerWrapperRef
  }, (react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(props.children, function (thisArg) {
    return thisArg;
  }) || []).map(function (each, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        opacity: key === index ? '1' : '0',
        zIndex: key === index ? '1' : '0'
      },
      "data-index": key,
      key: key,
      "aria-roledescription": "slide",
      "aria-hidden": key === index ? 'false' : 'true'
    }, each);
  }))), props.arrows && showNextArrow(props, index, preTransition)), props.indicators && showIndicators(props, index, navigate));
});
FadeZoom.defaultProps = defaultProps;

var Fade = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FadeZoom, Object.assign({}, props, {
    scale: 1,
    ref: ref
  }));
});
Fade.defaultProps = defaultProps;

var Zoom = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FadeZoom, Object.assign({}, props, {
    ref: ref
  }));
});
Zoom.defaultProps = defaultProps;

var Slide = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getStartingIndex(props.children, props.defaultIndex)),
      index = _useState[0],
      setIndex = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      wrapperWidth = _useState2[0],
      setWrapperWidth = _useState2[1];

  var wrapperRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var innerWrapperRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var tweenGroup = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_2__["Group"]());
  var responsiveSettings = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return getResponsiveSettings(wrapperWidth, props.responsive);
  }, [wrapperWidth, props.responsive]);
  var slidesToScroll = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    if (responsiveSettings) {
      return responsiveSettings.settings.slidesToScroll;
    }

    return props.slidesToScroll || 1;
  }, [responsiveSettings, props.slidesToScroll]);
  var slidesToShow = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    if (responsiveSettings) {
      return responsiveSettings.settings.slidesToShow;
    }

    return props.slidesToShow || 1;
  }, [responsiveSettings, props.slidesToShow]);
  var childrenCount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.count(props.children);
  }, [props.children]);
  var eachChildWidth = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return wrapperWidth / slidesToShow;
  }, [wrapperWidth, slidesToShow]);
  var timeout = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var resizeObserver = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var startingClientX;
  var dragging = false;
  var distanceSwiped = 0;
  var applyStyle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (innerWrapperRef.current) {
      var fullwidth = wrapperWidth * innerWrapperRef.current.children.length;
      innerWrapperRef.current.style.width = fullwidth + "px";

      for (var _index = 0; _index < innerWrapperRef.current.children.length; _index++) {
        var eachDiv = innerWrapperRef.current.children[_index];

        if (eachDiv) {
          eachDiv.style.width = eachChildWidth + "px";
          eachDiv.style.display = "block";
        }
      }
    }
  }, [wrapperWidth, eachChildWidth]);
  var initResizeObserver = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (wrapperRef.current) {
      resizeObserver.current = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__["default"](function (entries) {
        if (!entries) return;
        setWidth();
      });
      resizeObserver.current.observe(wrapperRef.current);
    }
  }, [wrapperRef]);
  var play = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    var autoplay = props.autoplay,
        infinite = props.infinite,
        duration = props.duration;

    if (autoplay && (infinite || index < childrenCount - 1)) {
      timeout.current = setTimeout(moveNext, duration);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [props, childrenCount, index]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    applyStyle();
  }, [wrapperWidth, applyStyle]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    initResizeObserver();
    return function () {
      tweenGroup.current.removeAll();
      clearTimeout(timeout.current);
      removeResizeObserver();
    };
  }, [wrapperRef, initResizeObserver, tweenGroup]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    clearTimeout(timeout.current);
    play();
  }, [index, wrapperWidth, props.autoplay, play]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"])(ref, function () {
    return {
      goNext: function goNext() {
        moveNext();
      },
      goBack: function goBack() {
        moveBack();
      },
      goTo: function goTo(index, options) {
        if (options != null && options.skipTransition) {
          setIndex(index);
        } else {
          moveTo(index);
        }
      }
    };
  });

  var removeResizeObserver = function removeResizeObserver() {
    if (resizeObserver && wrapperRef.current) {
      resizeObserver.current.unobserve(wrapperRef.current);
    }
  };

  var pauseSlides = function pauseSlides() {
    if (props.pauseOnHover) {
      clearTimeout(timeout.current);
    }
  };

  var swipe = function swipe(event) {
    if (props.canSwipe && dragging) {
      var clientX;

      if (window.TouchEvent && event.nativeEvent instanceof TouchEvent) {
        clientX = event.nativeEvent.touches[0].pageX;
      } else if (event.nativeEvent instanceof MouseEvent) {
        clientX = event.nativeEvent.clientX;
      }

      if (clientX && startingClientX) {
        var translateValue = eachChildWidth * (index + getOffset());
        var distance = clientX - startingClientX;

        if (!props.infinite && index === childrenCount - slidesToScroll && distance < 0) {
          // if it is the last and infinite is false and you're swiping left
          // then nothing happens
          return;
        }

        if (!props.infinite && index === 0 && distance > 0) {
          // if it is the first and infinite is false and you're swiping right
          // then nothing happens
          return;
        }

        distanceSwiped = distance;
        translateValue -= distanceSwiped;
        innerWrapperRef.current.style.transform = "translate(-" + translateValue + "px)";
      }
    }
  };

  var moveNext = function moveNext() {
    if (!props.infinite && index === childrenCount - slidesToScroll) {
      return;
    }

    var nextIndex = calculateIndex(index + slidesToScroll);
    transitionSlide(nextIndex);
  };

  var moveBack = function moveBack() {
    if (!props.infinite && index === 0) {
      return;
    }

    var previousIndex = index - slidesToScroll;

    if (previousIndex % slidesToScroll) {
      previousIndex = Math.ceil(previousIndex / slidesToScroll) * slidesToScroll;
    }

    transitionSlide(previousIndex);
  };

  var goToSlide = function goToSlide(_ref) {
    var currentTarget = _ref.currentTarget;

    if (!currentTarget.dataset.key) {
      return;
    }

    var datasetKey = parseInt(currentTarget.dataset.key);
    moveTo(datasetKey * slidesToScroll);
  };

  var moveTo = function moveTo(index) {
    transitionSlide(calculateIndex(index));
  };

  var calculateIndex = function calculateIndex(nextIndex) {
    if (nextIndex < childrenCount && nextIndex + slidesToScroll > childrenCount) {
      if ((childrenCount - slidesToScroll) % slidesToScroll) {
        return childrenCount - slidesToScroll;
      }

      return nextIndex;
    }

    return nextIndex;
  };

  var startSlides = function startSlides() {
    if (dragging) {
      endSwipe();
    } else if (props.pauseOnHover && props.autoplay) {
      timeout.current = setTimeout(moveNext, props.duration);
    }
  };

  var moveSlides = function moveSlides(_ref2) {
    var dataset = _ref2.currentTarget.dataset;

    if (dataset.type === 'next') {
      moveNext();
    } else {
      moveBack();
    }
  };

  var renderPreceedingSlides = function renderPreceedingSlides() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.toArray(props.children).slice(-slidesToShow).map(function (each, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "data-index": index - slidesToShow,
        "aria-roledescription": "slide",
        "aria-hidden": "true",
        key: index - slidesToShow
      }, each);
    });
  };

  var renderTrailingSlides = function renderTrailingSlides() {
    if (!props.infinite && slidesToShow === slidesToScroll) {
      return;
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.toArray(props.children).slice(0, slidesToShow).map(function (each, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        "data-index": childrenCount + index,
        "aria-roledescription": "slide",
        "aria-hidden": "true",
        key: childrenCount + index
      }, each);
    });
  };

  var setWidth = function setWidth() {
    if (wrapperRef.current) {
      setWrapperWidth(wrapperRef.current.clientWidth);
    }
  };

  var startSwipe = function startSwipe(event) {
    if (props.canSwipe) {
      if (window.TouchEvent && event.nativeEvent instanceof TouchEvent) {
        startingClientX = event.nativeEvent.touches[0].pageX;
      } else if (event.nativeEvent instanceof MouseEvent) {
        startingClientX = event.nativeEvent.clientX;
      }

      clearTimeout(timeout.current);
      dragging = true;
    }
  };

  var endSwipe = function endSwipe() {
    if (props.canSwipe) {
      dragging = false;

      if (Math.abs(distanceSwiped) / wrapperWidth > 0.2) {
        if (distanceSwiped < 0) {
          moveNext();
        } else {
          moveBack();
        }
      } else {
        if (Math.abs(distanceSwiped) > 0) {
          transitionSlide(index, 300);
        }
      }
    }
  };

  var animate = function animate() {
    requestAnimationFrame(animate);
    tweenGroup.current.update();
  };

  var transitionSlide = function transitionSlide(toIndex, animationDuration) {
    var transitionDuration = animationDuration || props.transitionDuration;
    var currentIndex = index;
    var existingTweens = tweenGroup.current.getAll();

    if (!wrapperRef.current) {
      return;
    }

    var childWidth = wrapperRef.current.clientWidth / slidesToShow;

    if (!existingTweens.length) {
      clearTimeout(timeout.current);
      var value = {
        margin: -childWidth * (currentIndex + getOffset()) + distanceSwiped
      };
      var tween = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_2__["Tween"](value, tweenGroup.current).to({
        margin: -childWidth * (toIndex + getOffset())
      }, transitionDuration).onUpdate(function (value) {
        if (innerWrapperRef.current) {
          innerWrapperRef.current.style.transform = "translate(" + value.margin + "px)";
        }
      });
      tween.easing(getEasing(props.easing));
      animate();
      var newIndex = toIndex;

      if (newIndex < 0) {
        newIndex = childrenCount - slidesToScroll;
      } else if (newIndex >= childrenCount) {
        newIndex = 0;
      }

      tween.onStart(function () {
        if (typeof props.onStartChange === 'function') {
          props.onStartChange(index, newIndex);
        }
      });
      tween.onComplete(function () {
        distanceSwiped = 0;

        if (typeof props.onChange === 'function') {
          props.onChange(index, newIndex);
        }

        setIndex(newIndex);
      });
      tween.start();
    }
  };

  var isSlideActive = function isSlideActive(key) {
    return key < index + slidesToShow && key >= index;
  };

  var getOffset = function getOffset() {
    if (!props.infinite) {
      return 0;
    }

    return slidesToShow;
  };

  var style = {
    transform: "translate(-" + (index + getOffset()) * eachChildWidth + "px)"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    dir: "ltr",
    "aria-roledescription": "carousel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "react-slideshow-container",
    onMouseEnter: pauseSlides,
    onMouseOver: pauseSlides,
    onMouseLeave: startSlides,
    onMouseDown: startSwipe,
    onMouseUp: endSwipe,
    onMouseMove: swipe,
    onTouchStart: startSwipe,
    onTouchEnd: endSwipe,
    onTouchCancel: endSwipe,
    onTouchMove: swipe
  }, props.arrows && showPreviousArrow(props, index, moveSlides), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "react-slideshow-wrapper slide " + (props.cssClass || ''),
    ref: wrapperRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "images-wrap",
    style: style,
    ref: innerWrapperRef
  }, props.infinite && renderPreceedingSlides(), (react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(props.children, function (thisArg) {
    return thisArg;
  }) || []).map(function (each, key) {
    var isThisSlideActive = isSlideActive(key);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      "data-index": key,
      key: key,
      className: isThisSlideActive ? 'active' : '',
      "aria-roledescription": "slide",
      "aria-hidden": isThisSlideActive ? 'false' : 'true'
    }, each);
  }), renderTrailingSlides())), props.arrows && showNextArrow(props, index, moveSlides)), props.indicators && showIndicators(props, index, goToSlide, responsiveSettings));
});
Slide.defaultProps = defaultProps;


//# sourceMappingURL=react-slideshow-image.esm.js.map


/***/ }),

/***/ "u47h":
/*!**************************************************************************!*\
  !*** ./lib/webparts/masterPageRow2/components/Feedback/Feedback.scss.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./Feedback.css */ "yMhD");
var styles = {};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "udT0":
/*!**********************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/parsers.js ***!
  \**********************************************************/
/*! exports provided: DefaultParse, TextParse, BlobParse, JSONParse, BufferParse, HeaderParse, JSONHeaderParse, errorCheck, parseODataJSON, parseBinderWithErrorCheck, HttpRequestError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultParse", function() { return DefaultParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextParse", function() { return TextParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlobParse", function() { return BlobParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONParse", function() { return JSONParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferParse", function() { return BufferParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderParse", function() { return HeaderParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONHeaderParse", function() { return JSONHeaderParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorCheck", function() { return errorCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseODataJSON", function() { return parseODataJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseBinderWithErrorCheck", function() { return parseBinderWithErrorCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestError", function() { return HttpRequestError; });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");


function DefaultParse() {
    return parseBinderWithErrorCheck(async (response) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        if ((response.headers.has("Content-Length") && parseFloat(response.headers.get("Content-Length")) === 0) || response.status === 204) {
            return {};
        }
        // patch to handle cases of 200 response with no or whitespace only bodies (#487 & #545)
        const txt = await response.text();
        const json = txt.replace(/\s/ig, "").length > 0 ? JSON.parse(txt) : {};
        return parseODataJSON(json);
    });
}
function TextParse() {
    return parseBinderWithErrorCheck(r => r.text());
}
function BlobParse() {
    return parseBinderWithErrorCheck(r => r.blob());
}
function JSONParse() {
    return parseBinderWithErrorCheck(r => r.json());
}
function BufferParse() {
    return parseBinderWithErrorCheck(r => Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["isFunc"])(r.arrayBuffer) ? r.arrayBuffer() : r.buffer());
}
function HeaderParse() {
    return parseBinderWithErrorCheck(async (r) => r.headers);
}
function JSONHeaderParse() {
    return parseBinderWithErrorCheck(async (response) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        if ((response.headers.has("Content-Length") && parseFloat(response.headers.get("Content-Length")) === 0) || response.status === 204) {
            return {};
        }
        // patch to handle cases of 200 response with no or whitespace only bodies (#487 & #545)
        const txt = await response.text();
        const json = txt.replace(/\s/ig, "").length > 0 ? JSON.parse(txt) : {};
        const all = { data: { ...parseODataJSON(json) }, headers: { ...response.headers } };
        return all;
    });
}
async function errorCheck(url, response, result) {
    if (!response.ok) {
        throw await HttpRequestError.init(response);
    }
    return [url, response, result];
}
function parseODataJSON(json) {
    let result = json;
    if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["hOP"])(json, "d")) {
        if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["hOP"])(json.d, "results")) {
            result = json.d.results;
        }
        else {
            result = json.d;
        }
    }
    else if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["hOP"])(json, "value")) {
        result = json.value;
    }
    return result;
}
/**
 * Provides a clean way to create new parse bindings without having to duplicate a lot of boilerplate
 * Includes errorCheck ahead of the supplied impl
 *
 * @param impl Method used to parse the response
 * @returns Queryable behavior binding function
 */
function parseBinderWithErrorCheck(impl) {
    return (instance) => {
        // we clear anything else registered for parse
        // add error check
        // add the impl function we are supplied
        instance.on.parse.replace(errorCheck);
        instance.on.parse(async (url, response, result) => {
            if (response.ok && typeof result === "undefined") {
                result = await impl(response);
            }
            return [url, response, result];
        });
        return instance;
    };
}
class HttpRequestError extends Error {
    constructor(message, response, status = response.status, statusText = response.statusText) {
        super(message);
        this.response = response;
        this.status = status;
        this.statusText = statusText;
        this.isHttpRequestError = true;
    }
    static async init(r) {
        const t = await r.clone().text();
        return new HttpRequestError(`Error making HttpClient request in queryable [${r.status}] ${r.statusText} ::> ${t}`, r);
    }
}
//# sourceMappingURL=parsers.js.map

/***/ }),

/***/ "uwN9":
/*!*******************************************************************!*\
  !*** ./lib/webparts/masterPageRow2/components/MasterPageRow2.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/@microsoft/spfx-heft-plugins/node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./MasterPageRow2.css */ "6ECn");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js */ "ruv1");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "v6VW":
/*!************************************!*\
  !*** ./node_modules/@pnp/sp/fi.js ***!
  \************************************/
/*! exports provided: SPFI, spfi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPFI", function() { return SPFI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spfi", function() { return spfi; });
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spqueryable.js */ "F4qD");

class SPFI {
    /**
     * Creates a new instance of the SPFI class
     *
     * @param root Establishes a root url/configuration
     */
    constructor(root = "") {
        this._root = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__["SPQueryable"])(root);
    }
    /**
     * Applies one or more behaviors which will be inherited by all instances chained from this root
     *
     */
    using(...behaviors) {
        this._root.using(...behaviors);
        return this;
    }
    /**
     * Used by extending classes to create new objects directly from the root
     *
     * @param factory The factory for the type of object to create
     * @returns A configured instance of that object
     */
    create(factory, path) {
        return factory(this._root, path);
    }
}
function spfi(root = "") {
    if (typeof root === "object" && !Reflect.has(root, "length")) {
        root = root._root;
    }
    return new SPFI(root);
}
//# sourceMappingURL=fi.js.map

/***/ }),

/***/ "vbtm":
/*!*******************************************************!*\
  !*** ./node_modules/@pnp/sp/utils/encode-path-str.js ***!
  \*******************************************************/
/*! exports provided: encodePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodePath", function() { return encodePath; });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");

/**
 * Encodes path portions of SharePoint urls such as decodedUrl=`encodePath(pathStr)`
 *
 * @param value The string path to encode
 * @returns A path encoded for use in SP urls
 */
function encodePath(value) {
    if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__["stringIsNullOrEmpty"])(value)) {
        return "";
    }
    // replace all instance of ' with ''
    if (/!(@.*?)::(.*?)/ig.test(value)) {
        return value.replace(/!(@.*?)::(.*)$/ig, (match, labelName, v) => {
            // we do not need to encodeURIComponent v as it will be encoded automatically when it is added as a query string param
            // we do need to double any ' chars
            return `!${labelName}::${v.replace(/'/ig, "''")}`;
        });
    }
    else {
        // because this is a literal path value we encodeURIComponent after doubling any ' chars
        return encodeURIComponent(value.replace(/'/ig, "''"));
    }
}
//# sourceMappingURL=encode-path-str.js.map

/***/ }),

/***/ "vicT":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "vttn":
/*!**********************************************!*\
  !*** ./node_modules/@pnp/sp/folders/list.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _lists_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lists/types.js */ "hy0S");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "4tXH");



Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__["addProp"])(_lists_types_js__WEBPACK_IMPORTED_MODULE_1__["_List"], "rootFolder", _types_js__WEBPACK_IMPORTED_MODULE_2__["Folder"]);
//# sourceMappingURL=list.js.map

/***/ }),

/***/ "wqax":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@microsoft/spfx-heft-plugins/node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./lib/webparts/masterPageRow2/components/QuickLinks/QuickLinks.css ***!
  \*****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/@microsoft/spfx-heft-plugins/node_modules/css-loader/dist/runtime/api.js */ "Z+AG")(false);
// Module
exports.push([module.i, ".linkBody{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:column;flex-direction:column;height:100%}.actualLink{text-decoration:none;font-size:8px;color:#000}.linkIcon img{height:20px;width:20px}", ""]);


/***/ }),

/***/ "xjAZ":
/*!**************************************************************!*\
  !*** ./lib/webparts/masterPageRow2/MasterPageRow2WebPart.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-property-pane */ "26ea");
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-webpart-base */ "br4S");
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var MasterPageRow2WebPartStrings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! MasterPageRow2WebPartStrings */ "FH5U");
/* harmony import */ var MasterPageRow2WebPartStrings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(MasterPageRow2WebPartStrings__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_MasterPageRow2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/MasterPageRow2 */ "ZzSW");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var MasterPageRow2WebPart = /** @class */ (function (_super) {
    __extends(MasterPageRow2WebPart, _super);
    function MasterPageRow2WebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isDarkTheme = false;
        _this._environmentMessage = '';
        return _this;
    }
    MasterPageRow2WebPart.prototype.render = function () {
        var element = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_MasterPageRow2__WEBPACK_IMPORTED_MODULE_6__["default"], {
            context: this.context,
            description: this.properties.description,
            isDarkTheme: this._isDarkTheme,
            environmentMessage: this._environmentMessage,
            hasTeamsContext: !!this.context.sdks.microsoftTeams,
            userDisplayName: this.context.pageContext.user.displayName
        });
        react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](element, this.domElement);
    };
    MasterPageRow2WebPart.prototype.onInit = function () {
        return this._getEnvironmentMessage().then(function (message) {
            // this._environmentMessage = message;
        });
    };
    MasterPageRow2WebPart.prototype._getEnvironmentMessage = function () {
        var _this = this;
        if (!!this.context.sdks.microsoftTeams) { // running in Teams, office.com or Outlook
            return this.context.sdks.microsoftTeams.teamsJs.app.getContext()
                .then(function (context) {
                var environmentMessage = '';
                switch (context.app.host.name) {
                    case 'Office': // running in Office
                        environmentMessage = _this.context.isServedFromLocalhost ? MasterPageRow2WebPartStrings__WEBPACK_IMPORTED_MODULE_5__["AppLocalEnvironmentOffice"] : MasterPageRow2WebPartStrings__WEBPACK_IMPORTED_MODULE_5__["AppOfficeEnvironment"];
                        break;
                    case 'Outlook': // running in Outlook
                        environmentMessage = _this.context.isServedFromLocalhost ? MasterPageRow2WebPartStrings__WEBPACK_IMPORTED_MODULE_5__["AppLocalEnvironmentOutlook"] : MasterPageRow2WebPartStrings__WEBPACK_IMPORTED_MODULE_5__["AppOutlookEnvironment"];
                        break;
                    case 'Teams': // running in Teams
                        environmentMessage = _this.context.isServedFromLocalhost ? MasterPageRow2WebPartStrings__WEBPACK_IMPORTED_MODULE_5__["AppLocalEnvironmentTeams"] : MasterPageRow2WebPartStrings__WEBPACK_IMPORTED_MODULE_5__["AppTeamsTabEnvironment"];
                        break;
                    default:
                        throw new Error('Unknown host');
                }
                return environmentMessage;
            });
        }
        return Promise.resolve(this.context.isServedFromLocalhost ? MasterPageRow2WebPartStrings__WEBPACK_IMPORTED_MODULE_5__["AppLocalEnvironmentSharePoint"] : MasterPageRow2WebPartStrings__WEBPACK_IMPORTED_MODULE_5__["AppSharePointEnvironment"]);
    };
    MasterPageRow2WebPart.prototype.onThemeChanged = function (currentTheme) {
        if (!currentTheme) {
            return;
        }
        // this._isDarkTheme = !!currentTheme.isInverted;
        var semanticColors = currentTheme.semanticColors;
        if (semanticColors) {
            this.domElement.style.setProperty('--bodyText', semanticColors.bodyText || null);
            this.domElement.style.setProperty('--link', semanticColors.link || null);
            this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered || null);
        }
    };
    MasterPageRow2WebPart.prototype.onDispose = function () {
        react_dom__WEBPACK_IMPORTED_MODULE_1__["unmountComponentAtNode"](this.domElement);
    };
    Object.defineProperty(MasterPageRow2WebPart.prototype, "dataVersion", {
        get: function () {
            return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Version"].parse('1.0');
        },
        enumerable: false,
        configurable: true
    });
    MasterPageRow2WebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: MasterPageRow2WebPartStrings__WEBPACK_IMPORTED_MODULE_5__["PropertyPaneDescription"]
                    },
                    groups: [
                        {
                            groupName: MasterPageRow2WebPartStrings__WEBPACK_IMPORTED_MODULE_5__["BasicGroupName"],
                            groupFields: [
                                Object(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__["PropertyPaneTextField"])('description', {
                                    label: MasterPageRow2WebPartStrings__WEBPACK_IMPORTED_MODULE_5__["DescriptionFieldLabel"]
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return MasterPageRow2WebPart;
}(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__["BaseClientSideWebPart"]));
/* harmony default export */ __webpack_exports__["default"] = (MasterPageRow2WebPart);


/***/ }),

/***/ "y+KB":
/*!**************************************************!*\
  !*** ./node_modules/@pnp/sp/site-users/types.js ***!
  \**************************************************/
/*! exports provided: _SiteUsers, SiteUsers, _SiteUser, SiteUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_SiteUsers", function() { return _SiteUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteUsers", function() { return SiteUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_SiteUser", function() { return _SiteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteUser", function() { return SiteUser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spqueryable.js */ "F4qD");
/* harmony import */ var _site_groups_types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../site-groups/types.js */ "UuUm");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../decorators.js */ "hMpi");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../operations.js */ "UK2s");






let _SiteUsers = class _SiteUsers extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__["_SPCollection"] {
    /**
     * Gets a user from the collection by id
     *
     * @param id The id of the user to retrieve
     */
    getById(id) {
        return SiteUser(this, `getById(${id})`);
    }
    /**
     * Gets a user from the collection by email
     *
     * @param email The email address of the user to retrieve
     */
    getByEmail(email) {
        return SiteUser(this, `getByEmail('${email}')`);
    }
    /**
     * Gets a user from the collection by login name
     *
     * @param loginName The login name of the user to retrieve
     */
    getByLoginName(loginName) {
        return SiteUser(this).concat(`('!@v::${loginName}')`);
    }
    /**
     * Removes a user from the collection by id
     *
     * @param id The id of the user to remove
     */
    removeById(id) {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__["spPost"])(SiteUsers(this, `removeById(${id})`));
    }
    /**
     * Removes a user from the collection by login name
     *
     * @param loginName The login name of the user to remove
     */
    removeByLoginName(loginName) {
        const o = SiteUsers(this, "removeByLoginName(@v)");
        o.query.set("@v", `'${loginName}'`);
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__["spPost"])(o);
    }
    /**
     * Adds a user to a site collection
     *
     * @param loginName The login name of the user to add  to a site collection
     *
     */
    async add(loginName) {
        await Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__["spPost"])(this, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_3__["body"])({ LoginName: loginName }));
        return this.getByLoginName(loginName);
    }
};
_SiteUsers = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_decorators_js__WEBPACK_IMPORTED_MODULE_4__["defaultPath"])("siteusers")
], _SiteUsers);

const SiteUsers = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__["spInvokableFactory"])(_SiteUsers);
/**
 * Describes a single user
 *
 */
class _SiteUser extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__["_SPInstance"] {
    constructor() {
        super(...arguments);
        this.delete = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__["deleteable"])();
    }
    /**
     * Gets the groups for this user
     *
     */
    get groups() {
        return Object(_site_groups_types_js__WEBPACK_IMPORTED_MODULE_2__["SiteGroups"])(this, "groups");
    }
    /**
     * Updates this user
     *
     * @param props Group properties to update
     */
    async update(props) {
        const data = await Object(_operations_js__WEBPACK_IMPORTED_MODULE_5__["spPostMerge"])(this, Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_3__["body"])(props));
        return {
            data,
            user: this,
        };
    }
}
const SiteUser = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__["spInvokableFactory"])(_SiteUser);
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "yMhD":
/*!**********************************************************************!*\
  !*** ./lib/webparts/masterPageRow2/components/Feedback/Feedback.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../node_modules/@microsoft/spfx-heft-plugins/node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/src??postcss!./Feedback.css */ "MiMR");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js */ "ruv1");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "ymW/":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/folders/web.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webs/types.js */ "dVsc");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "4tXH");



Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__["addProp"])(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__["_Web"], "folders", _types_js__WEBPACK_IMPORTED_MODULE_2__["Folders"]);
Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__["addProp"])(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__["_Web"], "rootFolder", _types_js__WEBPACK_IMPORTED_MODULE_2__["Folder"]);
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__["_Web"].prototype.getFolderByServerRelativePath = function (folderRelativeUrl) {
    return Object(_types_js__WEBPACK_IMPORTED_MODULE_2__["folderFromServerRelativePath"])(this, folderRelativeUrl);
};
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__["_Web"].prototype.getFolderById = function (uniqueId) {
    return Object(_types_js__WEBPACK_IMPORTED_MODULE_2__["Folder"])(this, `getFolderById('${uniqueId}')`);
};
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "yy6+":
/*!****************************************************************************!*\
  !*** ./lib/webparts/masterPageRow2/components/ImageSlider/ImageSliders.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MasterPageRow2_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MasterPageRow2.scss */ "PNaF");
/* harmony import */ var _ImageSlider_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageSlider.scss */ "FMsJ");
/* harmony import */ var react_slideshow_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slideshow-image */ "tMxi");
/* harmony import */ var react_slideshow_image_dist_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-slideshow-image/dist/styles.css */ "rOeR");
/* harmony import */ var react_slideshow_image_dist_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_slideshow_image_dist_styles_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pnp_sp_profiles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pnp/sp/profiles */ "eKJE");
/* harmony import */ var _pnp_sp_lists__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @pnp/sp/lists */ "J7sA");
/* harmony import */ var _pnp_sp_webs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @pnp/sp/webs */ "6k7F");
/* harmony import */ var _pnp_sp_site_users_web__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @pnp/sp/site-users/web */ "EjWy");
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../MasterPageRow2.scss";
// import Carousel from "react-bootstrap/Carousel";
// import * as React from "react";
// const ImageSliders = (props: any) => {
//   return (
//     <>
//     <div>Slider</div>
//       <Carousel  variant="dark">
//         {props.data &&
//           props.data?.map((x: any,i:number) => {
//             let y = [];
//             let carouselstyle='';
//             console.log("hi");
//             console.log(x.image);
//             y = JSON.parse(x.image);
//             console.log(y);
//             console.log(y.serverUrl + y.serverRelativeUrl);
//             const actualsrc = y.serverUrl + y.serverRelativeUrl;
//               carouselstyle="carousel-item active"
//             return(
//               <>
//             <Carousel.Item className={carouselstyle} interval={500} key={actualsrc.id} >
//             <div className={carouselstyle}>
//               <img
//                 className="d-block w-100"
//                 src={actualsrc}
//                 height={200}
//                 width={200}
//                 alt="First slide"
//               />
//           </div> 
//               <Carousel.Caption>
//                 <h5>{x.Title}</h5>
//                 <p>
//                   Nulla vitae elit libero, a pharetra augue mollis interdum.
//                 </p>
//               </Carousel.Caption>
//             </Carousel.Item>
//             </>
//             )
//           })}
//       </Carousel>
//     </>
//   );
// };
// export default ImageSliders;









var ImageSliders = function (props) {
    console.log(props.data);
    var arr = [];
    arr = props.data;
    console.log(arr);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_slideshow_image__WEBPACK_IMPORTED_MODULE_3__["Slide"], null, props.data && props.data.map(function (x) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'each-slide' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: x })));
        }))));
};
/* harmony default export */ __webpack_exports__["default"] = (ImageSliders);


/***/ }),

/***/ "zhiF":
/*!*********************************************************!*\
  !*** ./node_modules/@pnp/core/behaviors/assign-from.js ***!
  \*********************************************************/
/*! exports provided: AssignFrom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignFrom", function() { return AssignFrom; });
/**
 * Behavior that will assign a ref to the source's observers and reset the instance's inheriting flag
 *
 * @param source The source instance from which we will assign the observers
 */
function AssignFrom(source) {
    return (instance) => {
        instance.observers = source.observers;
        instance._inheritingObservers = true;
        return instance;
    };
}
//# sourceMappingURL=assign-from.js.map

/***/ })

/******/ })});;
//# sourceMappingURL=master-page-row-2-web-part.js.map