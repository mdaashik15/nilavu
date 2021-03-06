import {url} from 'nilavu/lib/computed';
import {on} from 'ember-addons/ember-computed-decorators';
import computed from 'ember-addons/ember-computed-decorators';
import RestModel from 'nilavu/models/rest';

const LaunchStatusTypes = {
    LAUNCHING: 'LAUNCHING',
    LAUNCHED: 'LAUNCHED',
    BOOTSTRAPPING: 'BOOTSTRAPPING',
    BOOTSTRAPPED: 'BOOTSTRAPPED',
    STATEUPSTARTING: 'STATEUPSTARTING',
    CHEFRUNNING: 'CHEFRUNNING',
    COOKBOOKSUCCESS: 'COOKBOOKSUCCESS',
    AUTHKEYSADDED: 'AUTHKEYSADDED',
    ROUTEADDED: 'ROUTEADDED',
    CHEFCONFIGSETUPSTARTING: 'CHEFCONFIGSETUPSTARTING',
    CHEFCONFIGSETUPSTARTED: 'CHEFCONFIGSETUPSTARTED',
    GITCLONED: 'GITCLONED',
    GITCLONING: 'GITCLONING',
    STATEUPSTARTED: 'STATEUPSTARTED',
    UPDATING: 'UPDATING',
    UPDATED: 'UPDATED',
    DOWNLOADED: 'DOWNLOADED',
    DOWNLOADING: 'DOWNLOADING',
    VNCHOSTUPDATING: 'VNCHOSTUPDATING',
    VNCHOSTUPDATED: 'VNCHOSTUPDATED',
    DNSNAMESKIPPED: 'DNSNAMESKIPPED',
    COOKBOOK_DOWNLOADING: 'COOKBOOK_DOWNLOADING',
    COOKBOOK_DOWNLOADED: 'COOKBOOK_DOWNLOADED',
    AUTHKEYSUPDATING: 'AUTHKEYSUPDATING',
    AUTHKEYSUPDATED: 'AUTHKEYSUPDATED',
    IP_UPDATING: 'IP_UPDATING',
    IP_UPDATED: 'IP_UPDATED'
}

const LaunchActionTypes = {
    STARTING: 'STARTING',
    STARTED: 'STARTED',
    STOPPING: 'STOPPING',
    STOPPED: 'STOPPED',
    RESTARTING: 'RESTARTING',
    RESTARTED: 'RESTARTED',
    REBOOTING: 'REBOOTING',
    REBOOTTED: 'REBOOTTED',
    DELETING: 'DELETING',
    DELETED: 'DELETED',
    SNAPSHOTTING: 'SNAPSHOTTING',
    SNAPSHOTTED: 'SNAPSHOTTED',
    RUNNING: 'RUNNING'
};

/** there could be more status that are considered successful */
const LaunchTypes = {
    LAUNCHED: 'LAUNCHED',
    BOOTSTRAPPED: 'BOOTSTRAPPED',
    INITIALIZING: 'INITIALIZING',
    INITIALIZED: 'INITIALIZED',
    PREERROR: 'PREERROR'
};

const LaunchErrorTypes = {
    ERROR: 'ERROR',
    POSTERROR: 'POSTERROR'

};

const LaunchStatus = RestModel.extend({

    @computed("event_type")launchKey(action) {
        if (action != null) {
            var successArray = [];

            _.each(LaunchTypes, (k, v) => {
                successArray.push(k);
            });
            return successArray.indexOf(action.toUpperCase()) >= 0;
        }
        return false;
    },

    @computed("event_type")errorKey(action) {
        if (action != null) {
            var errorsArray = [];

            _.each(LaunchErrorTypes, (k, v) => {
                errorsArray.push(k);
            });

            return errorsArray.indexOf(action.toUpperCase()) >= 0;
        }

        return false;
    },

    @computed("event_type")statusKey(action) {
        if (action != null) {
            var statusArray = [];

            _.each(LaunchStatusTypes, (k, v) => {
                statusArray.push(k);
            });

            return statusArray.indexOf(action) >= 0;
        }

        return false;
    }
});

LaunchStatus.reopenClass({TYPES: LaunchStatusTypes, TYPES_ACTION: LaunchActionTypes, TYPES_LAUNCH: LaunchTypes, TYPES_ERROR: LaunchErrorTypes});

export default LaunchStatus;
