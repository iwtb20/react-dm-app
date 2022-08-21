import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
    QuantitySection,
    FormLabelCol,
    QuantityRow,
    QuantityColumn,
    QuantityCell
} from "./OrderFormElements";

const SizeSelector = () => {
  return (
      <></>
  );
};

class OrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('Something was submitted: ' + this.state.email + this.state.password);
    event.preventDefault();
  }

  render () {
    return (
        <>
          <Container>
            <FormWrap>
              <FormContent>
                <Form onSubmit={this.handleSubmit}>
                  <FormH1>Order Form</FormH1>
                    <QuantitySection>
                      <QuantityRow>

                      <FormInput  name='email' type='checkbox'  />
                      <FormLabelCol htmlFor='for'>Email
                      </FormLabelCol>
                      <FormLabelCol htmlFor='for'>Email
                      </FormLabelCol>
                        </QuantityRow>

                    </QuantitySection>

                  <FormButton type='submit'>Continue</FormButton>
                  <Text>Forgot password</Text>
                </Form>
              </FormContent>
            </FormWrap>
          </Container>
        </>
    );
  }
}

/* <FormLabel htmlFor='for'>Email
  <FormInput value={this.state.email} onChange={this.handleInputChange} name='email' type='checkbox'  />
</FormLabel>

<FormLabel htmlFor='for'>Password
  <FormInput value={this.state.password} onChange={this.handleInputChange} name='password' type='checkbox'  />
</FormLabel> */

export default OrderForm;