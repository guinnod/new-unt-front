import { useSelector } from "react-redux";
import { Activity } from "../../components/activity";
import { LazyImage } from "../../components/lazy-image";
import { PageSkeleton } from "../../components/page-skeleton";
import { Tracker } from "../../components/tracker";
import "./profile.css";
import { Alert, notification } from "antd";
import { useEffect } from "react";

export const Profile = () => {
    const language = useSelector((state) => state.language.value.profile);
    const messages = useSelector((state) => state.language.value.messages);
    const auth = useSelector((state) => state.auth);
    const solved = auth.solved;
    const maxSolved = {
        overall: 1800,
        maxSimple: 1000,
        maxContext: 500,
        maxMultiple: 300,
    };
    const types = [
        {
            text: language.simple,
            value: auth.simple,
            maxValue: maxSolved.maxSimple,
            className: "",
        },
        {
            text: language.context,
            value: auth.context,
            maxValue: maxSolved.maxContext,
            className: "activity__progress--context",
        },
        {
            text: language.multiple,
            value: auth.multiple,
            maxValue: maxSolved.maxMultiple,
            className: "activity__progress--multiple",
        },
    ];
    const [notificationApi, contextHolder] = notification.useNotification();
    useEffect(() => {
        notificationApi.info({
            message: messages.notification,
            description: (
                <div style={{ whiteSpace: "wrap" }}>{messages.onProcess}</div>
            ),
            placement: "topLeft",
            duration: 0,
        });
    }, []);
    return (
        <PageSkeleton header={"home"}>
            {contextHolder}
            <div className="profile__anchor">
                <div className="profile__sidebar">
                    <LazyImage
                        src={auth.profilePhoto}
                        alt="user"
                        className="profile__photo"
                    />
                    <p>
                        {language.username}: {auth.username}
                    </p>
                    <p>
                        {language.name}: {auth.name}
                    </p>
                    <p>
                        {language.max}: {auth.maxScore}
                    </p>
                </div>
                <div className="profile__content">
                    <div>
                        <Activity
                            maxSolved={maxSolved}
                            solved={solved}
                            types={types}
                        />
                        <div className="tracker__root">
                            <Tracker
                                days={auth.days}
                                text={language.progress}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </PageSkeleton>
    );
};
