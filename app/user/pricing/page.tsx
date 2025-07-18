"use client";

import { Row, Col } from 'antd';
import PlanCard from '@/components/ui/PlanCard';
import PageTitle from '@/components/ui/PageTitle';
import AltLayout from '@/components/layout/AltLayout';
import { basicPlan, standardPlan, premiumPlan } from './dummyPlan';

const Pricing: React.FC = () => {
    return (
        <AltLayout header={<PageTitle backButton={true}>PREMIUM PLAN</PageTitle>}>
            <Row gutter={[0, 16]} className="!p-4 bg-white">
                <Col xs={24} md={8}>
                    <PlanCard title="Basic" price="$5" description="Ideal for simple, entry-level AI personas" features={basicPlan} />
                </Col>
                <Col xs={24} md={8}>
                    <PlanCard title="Standard" price="$15" description="Perfect for growing AI needs" features={standardPlan} />
                </Col>
                <Col xs={24} md={8}>
                    <PlanCard title="Premium" price="$45" description="Best for large enterprise AI models" features={premiumPlan} />
                </Col>
            </Row>
        </AltLayout>
    );
};

export default Pricing;
