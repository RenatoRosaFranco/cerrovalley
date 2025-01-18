import React from 'react';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { toast } from 'react-toastify';

const Newsletter = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Insira um e-mail válido')
      .required('O e-mail é obrigatório'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch('/api/newsletters', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: values.email }),
      });

      if (response.ok) {
        resetForm();
        toast.success('Você se inscreveu com sucesso.');
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || 'Falha ao inscrever-se, tente novamente.');
      }
    } catch (error) {
      toast.error('Erro de rede, tente novamente.');
    }
  };

  return(
    <section id="newsletter">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-6">
              <div className="row">
                <h2 className="bold">Newsletter</h2>
                <p>Ajudamos você a tirar sua ideia do papel!</p>
                <p>Inscreva-se em nossa newsletter e receba conteúdos semanais</p>
              </div>
            </div>
            <div className="col-md-6">
              <Formik 
                initialValues={{ email: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form>
                  <div className="form-group col-md-6 col-md-offset-4" style={{ marginTop: 15 }}>
                    <label htmlFor='email'>E-mail</label>
                    <div className="input-group">
                      <div className="input-group-addon">
                        <i className="fa-regular fa-paper-plane"></i>
                      </div>
                      <Field type='text' name='email' placeholder='Seu melhor e-mail' className='form-control' />
                    </div>
                    <ErrorMessage name='email' component='div' className='text-danger' style={{ marginTop: 10 }} />
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;