import {
    Layout,
    Page,
    Button,
    Heading
} from '@shopify/polaris';
import { TitleBar } from '@shopify/app-bridge-react';

class Login extends React.Component {
    render(){
        return (
            <Page>
                <TitleBar
                    primaryAction={{
                        content: 'Sign Out',
                        url: "/"
                    }}
                />
                <Layout>
                    <Heading element="h1">Dashboard page</Heading>
                </Layout>
            </Page>
        );
    }
}

export default Login;