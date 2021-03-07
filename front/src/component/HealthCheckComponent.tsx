import react from 'react';
import { APIs } from '../api/http';

type HealthCheckProps = {};

const HealthCheckComponent: React.FC<HealthCheckProps> = () => {

    const healthCheckPing = async() => {
        const {data} = await APIs.healthCheck();
        console.info("HealthCheck!!", data);
    };

    return (
        <div onClick={healthCheckPing}>
            헬스체크 핑!
        </div>
    );


};

export default HealthCheckComponent